/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useState, useEffect } from "react";
import {
  PlasmicPlay,
  DefaultPlayProps
} from "./plasmic/jungle_fever/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useGlobalContext } from './Web3Context';
import RPC from "../ethersRPC";
import { nftWatch } from "../nftWatch";
import Pako from 'pako';
import { ElvClient } from "@eluvio/elv-client-js";
import loader from './loader.svg';
import Buy from "./Buy"

const Utils = require("@eluvio/elv-client-js/src/Utils.js");

export interface PlayProps extends DefaultPlayProps {}

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  // const [checked, setChecked] = useState(
  //   "Please make sure you're connected with the wallet holding the required NFT and click on the button below."
  // );
  const [eluvioStream, setEluvioStream] = useState("");

  const {
    // web3auth,
    // setWeb3auth,
    provider,
    // setProvider,
    userAddress,
    isOwner,
    setIsOwner,
    // bal
    // setUserAddress,
    // userShortenAddr,
    // setShortenAddr,
    // signer,
    // setSigner,
  } = useGlobalContext();

  /*
  useEffect(() => {
    //nftWatch(nftWatchCallback);
    verifyOwnership()

    const accessToken = "placeholder" // placeholder
    setEluvioStream(
      "https://embed.v3.contentfabric.io//?net=demo&p&ct=h&vid=" + // network = demo OU main
        video +
        "&ath=" +
        accessToken
    );

  }, [provider]);
  */
  useEffect(() => {
    if (userAddress === "") {
      return;
    }
    console.log('[useEffect] userAddress: ', userAddress);
    verifyOwnership()
    
  }, [provider, userAddress]);

  let client: any;

  const main = async () => {
    console.log("main func executed");
    console.log("provider:", provider);
    const networkName = "main";
    client = await ElvClient.FromNetworkName({ networkName });

    // temporary: use a fixed known node w/ chain_id 5 available:
    client.authServiceURIs = ["https://host-76-74-29-35.contentfabric.io"];
    client.AuthHttpClient.uris = client.authServiceURIs;

    console.log("client.AuthHttpClient.uris:", )

    if (!provider) {
      console.log("ERROR! no provider!")
      return;
    }

    // set signDigest
    const signDigest = async (message:string) => {
      console.log('requesting personal_sign in signDigest');
      return await provider.request({
        method: 'personal_sign',
        params: [userAddress, message],
      });
    };
    client.signDigest = signDigest;
    client.signer.signDigest = signDigest;
    client.ToggleLogging(false);
    console.log("client", client);

    // Call the oracle cross-chain 'view' API 'balance'
    let xcoResp = await XcoView({
      contentSpaceId: client.ContentSpaceId(),
      signer: client,
    });
    console.log("[main] XCO RESPONSE: ", JSON.stringify(xcoResp));

    const videos = {
      "SDR": {
        name: "paramax - Title Mezzanines > MusicHole_UHD_SDR_4444XQ_REC709_25_51-20_FR-XX_20220930.mov MEZ",
        hash: "hq__4tN1gcRsL6n5HxpBKhAPiBQQ8Lb4SEYKaUcueh3awYqBrYxw2rCiBEz4kuzk9r46p9XYqP8QMM",
      },
      "HDR": {
        name: "paramax - Title Mezzanines > MusicHole_UHD_HDR10_4444XQ_P3D65_25_51-20_FR-XX_20221005.mov MEZ",
        hash: "hq__5m4nGgQk4J5uXaHJgxJ5fS2M2EHDBRtXVM3ZU9mpzQhC46SbiWZv6QjaUS5syNgHNVKpJnbjAj", 
      }
    };
    const video = videos["SDR"]; // select based on which play button is used
    console.log("using video", video);

    const accessToken = xcoResp?.token;
    console.log("accessToken", accessToken);
    if (accessToken) {
      client.SetStaticToken({ token: accessToken });
      console.log("step 1");
      console.log("https://embed.v3.contentfabric.io/?net=main&p&ct=h&vid=" + video.hash + "&ath=" + accessToken);
      setEluvioStream(
          "https://embed.v3.contentfabric.io/?net=main&p&ct=h&vid=" +
          video.hash +
          "&ath=" +
          accessToken +
          "&nwm=(\"no watermark\")"
      );
      console.log("eluvioStream:", eluvioStream);
      console.log("DecodeSignedToken(xcoResp):", client.utils.DecodeSignedToken(accessToken));
    } else {
      console.log("error getting access token from xcoResp");
    }
  };

  /**
   * Create a signed authorization token used for calling the cross-chain oracle
   */
   const CreateOracleAccessToken = async ({
    duration,
    contentSpaceId,
    signer,
  }: {
    duration: number;
    contentSpaceId: string;
    signer: any;
  }) => {
    //const address = await signer.getAddress();
    const address = userAddress;

    console.log("[CreateOracleAccessToken] userAddress: ", address);

    let token = {
      sub: `iusr${Utils.AddressToHash(address)}`,
      adr: Buffer.from(address.replace(/^0x/, ""), "hex").toString("base64"),
      spc: contentSpaceId,
      iat: Date.now(),
      exp: Date.now() + duration,
    };

    let message = `Eluvio Content Fabric Access Token 1.0\n${JSON.stringify(
      token
    )}`;

    console.log("signer", );
    const signature = await signer.signDigest(message);

    const compressedToken = Pako.deflateRaw(
      Buffer.from(JSON.stringify(token), "utf-8")
    );
    return `acspjc${Utils.B58(
      Buffer.concat([
        Buffer.from(signature.replace(/^0x/, ""), "hex"),
        Buffer.from(compressedToken),
      ])
    )}`;

  };

  /**
   * Make a cross-chain oracle call
   */
   const XcoView = async ({
    contentSpaceId,
    signer,
  }: {
    contentSpaceId: string;
    signer: any;
  }) => {
    console.log("provider xcoview:", provider);

    // Create a client-signed access token  in order to access the cross-chain oracle API
    let xcoToken = await CreateOracleAccessToken({
      duration: 1 * 1000, // millisec
      contentSpaceId: contentSpaceId,
      signer: signer,
    });
    console.log("ORACLE ACCESS TOKEN", xcoToken);
    console.log("ORACLE TOKEN DECODED", JSON.stringify(client.utils.DecodeSignedToken(xcoToken), null, 2));


    // Format cross-chain oracle request
    const xcoReq = {
      chain_type: "eip155",
      chain_id: "1",
      asset_type: "erc721",
      asset_id: "0x6ab72024c73de3a7358233328c7ce94abb007ac1",
      method: "balance"
    };
    console.log("xcoReq: ", xcoReq);

    // Call the cross-chain oracle 'view' API
    try {
      let res = await Utils.ResponseToFormat(
        "json",
        client.authClient.MakeAuthServiceRequest({
          method: "POST",
          path: "/as/xco/view",
          body: xcoReq,
          headers: {
            Authorization: `Bearer ${xcoToken}`,
          },
        })
      );
      console.log("XCO RESPONSE", res);
      return res;
    } catch (err) {
      console.log("XcoView (res) error: ", err); // returns this: "POST https://host-76-74-28-227.contentfabric.io/as/xco/view 400 (Bad Request)""
      return null;
    }

  };


  const nftWatchCallback = async (contract:string, from:string, to:string, tokenId:string) => {
    console.log('nftWatchCallback (contract): ',contract);
    console.log('nftWatchCallback (from): ',from);
    console.log('nftWatchCallback (to): ',to);
    //console.log('nftWatchCallback (tokenId): ',tokenId);
    verifyOwnership();
  }

  const verifyOwnership = async () => {
    console.log("clicked")
    console.log("userAddress:", userAddress)
    console.log("provider:", provider)

    // nft references
    const nftNetwork = 1 
    const nftContractAddress = "0x6ab72024c73de3a7358233328c7ce94abb007ac1" // https://goerli.etherscan.io/address/0x8d5229b3c84cf9157db6e72932bcef2fcec92fd1#code
    // const nftId = 8

    if (!provider) {
      // console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    // const receipt = await rpc.verifyOwnership(nftNetwork, nftContractAddress, nftId);
    const receipt = await rpc.verifyOwnership(nftNetwork, nftContractAddress);
    console.log("receipt: ", receipt);
    // for test, always return true
    setIsOwner(receipt)

    if (receipt === true) {
      // setIsOwner(receipt)
      // start Contract monitoring
      // watchNft.start()
      main();
    } else {
      // setChecked("Sorry, it seems like you're not the owner of the required NFT. ???? \n \n To get one, just ask Julien.")
    }
  };

  console.log("isOwner:", isOwner)
    
  return (
    <PlasmicPlay
      root={{ ref }}
      {...props}
      videoBox={{
        props: {
          
          children: isOwner === true ? (
              <iframe
                width={"100%"}
                height={"100%"}
                frameBorder="0"
                className="responsive-iframe"
                allowFullScreen
                title="eluvioStream"
                src={eluvioStream}
                sandbox="allow-forms
                allow-pointer-lock
                allow-popups
                allow-same-origin
                allow-scripts
                allow-top-navigation"
                allow="encrypted-media *; autoplay; fullscreen; clipboard-read; clipboard-write"
                
              />
            ) : (
              <Buy />
            )
        },
      }}
    />
  );
}
const Play = React.forwardRef(Play_);
export default Play;
