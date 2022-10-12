/**
 * 
 *         (a key that owns the token)
 * 
 * Paramax Sample ClientSignedTokenXco
 *
 * Use a cross-chain oracle signed message to access fabric resources.
 *
 * export PRIVATE_KEY - set to the private key of an account that owns
 *                      a token (asset).
 */


import { ElvClient } from "elv-client-js";

// le code original
// const { ElvClient } = require("../../src/ElvClient");
// const Utils = require("../../src/Utils");

export const privKey = process.env.REACT_APP_PRIVATE_KEY;

console.log("privKey:", privKey)

const Utils = require("../../src/Utils");

const Pako = require("pako");

const networkName = "main"; // "main" or "demo"

const contentHash = "hq__DXT6WtfrVeg7bC3jgMoLpcRHLFDnu9xYHyLqWZH3K5C4LJfErBuedrqUGqmLWF8FwTqLqo6m9";

let client;

const Setup = async () => {

  client = await ElvClient.FromNetworkName({networkName});

  let wallet = client.GenerateWallet();
  let signer = wallet.AddAccount({
    privateKey: privKey
  });
  client.SetSigner({signer});

  client.ToggleLogging(false);

  return client;
}

/**
 * Create a simple local private key-based signer
 */
const LocalSigner = async () => {
  let tmpClient = await ElvClient.FromNetworkName({networkName});
  let wallet = tmpClient.GenerateWallet();
  let signer = wallet.AddAccount({
    privateKey: process.env.PRIVATE_KEY
  });
  return signer;
}

/**
 * Create a signed authorization token used for calling the cross-chain oracle
 */
 const CreateOracleAccessToken = async ({
  duration,
  contentSpaceId,
  signer
}) => {

  const address = await signer.getAddress();

  let token = {
    sub:`iusr${Utils.AddressToHash(address)}`,
    adr: Buffer.from(address.replace(/^0x/, ""), "hex").toString("base64"),
    spc: contentSpaceId,
    iat: Date.now(),
    exp: Date.now() + duration,
  };

  let message = `Eluvio Content Fabric Access Token 1.0\n${JSON.stringify(token)}`;

  const signature = await signer.signMessage(message);

  const compressedToken = Pako.deflateRaw(Buffer.from(JSON.stringify(token), "utf-8"));
  return `acspjc${Utils.B58(
    Buffer.concat([
      Buffer.from(signature.replace(/^0x/, ""), "hex"),
      Buffer.from(compressedToken)
    ])
  )}`;
}

/**
 * Make a cross-chain oracle call
 */
 const XcoView = async ({contentSpaceId, signer}) => {

  // Create a client-signed access token  in order to access the cross-chain oracle API
  let xcoToken = await CreateOracleAccessToken({
    duration: 1 * 1000, // millisec
    contentSpaceId: contentSpaceId,
    address: signer.getAddress(),
    signer: client.signer
  });
  console.log("ORACLE ACCESS TOKEN", xcoToken);

  // Format cross-chain oracle request
  const xcoReq = {
    chain_type: 'eip155',
    chain_id: '955305',
    asset_type: 'erc721',
    asset_id: '0xd4c8153372b0292b364dac40d0ade37da4c4869a',
    method: 'balance'
  };

  // Call the cross-chain oracle 'view' API
  let res = await Utils.ResponseToFormat(
    "json",
    client.authClient.MakeAuthServiceRequest({
      method: "POST",
      path: "/as/xco/view",  // On main/dev net /as/xco/view
      body: xcoReq,
      headers: {
        Authorization: `Bearer ${xcoToken}`,
      },
    })
  );

  return res;
}

/**
 * Retrieve playout URLs
 */
const Play = async ({}) => {

  // First retrieve title metadata (title, synopsis, cast, ...)
  let meta = await client.ContentObjectMetadata({
    versionHash: contentHash,
    metadataSubtree: "/public/asset_metadata"
  });
  console.log("META", meta);

  // Retrieve playout info (DASH and HLS URLs)
  let res = await client.PlayoutOptions({
    versionHash: contentHash,
    drms: ["clear", "aes-128", "fairplay", "widevine"]
  });

  return res;
}

const Run = async () => {

  let client = await Setup();

  // Set custom signer here (for example a web3 metamask signer)
  // This example just uses a simple private key signer
  let signer = await LocalSigner();

  // Call the oracle cross-chain 'view' API 'balance'
  let xcoResp = await XcoView({
    contentSpaceId: client.ContentSpaceId(),
    signer: signer
  });
  console.log("FABRIC ACCESS TOKEN", JSON.stringify(xcoResp));
  let accessToken = xcoResp.token;

  // Create a client object and use the access token returned by the
  // cross-chain oracle.
  client.SetStaticToken({ token: accessToken });

  // Play
  let playoutOptions = await Play({});
  console.log("PLAYOUT", JSON.stringify(playoutOptions, null, 2));
}

// if (!process.env.PRIVATE_KEY) {
//   console.log("Must set environment variable PRIVATE_KEY");
//   // return;
// }

Run();
