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

const Utils = require("@eluvio/elv-client-js/src/Utils.js");

export interface PlayProps extends DefaultPlayProps {}

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  const [checked, setChecked] = useState(
    "Please make sure you're connected with the wallet holding the required NFT and click on the button below."
  );
  const [eluvioStream, setEluvioStream] = useState("");

  // const video = "hq__DXT6WtfrVeg7bC3jgMoLpcRHLFDnu9xYHyLqWZH3K5C4LJfErBuedrqUGqmLWF8FwTqLqo6m9";
  const video = "hq__93SK4rgxMarq1ZeDSEu9WJkDoptTKYiA2GmYocK7inMthUssGkG6Q9BREBEhNtVCiCBFsPd4Gd";

  const {
    // web3auth,
    // setWeb3auth,
    provider,
    // setProvider,
    userAddress,
    isOwner,
    setIsOwner
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
    main();
  }, [userAddress]);

  let client: any;

  const main = async () => {
    console.log("main func executed");
    console.log("provider:", provider);
    //const ethersProvider = new ethers.providers.Web3Provider(provider);
    //const signer = ethersProvider.getSigner();

    //console.log("signer:", signer);

    // networkName: "main",
    const networkName = "main";
    client = await ElvClient.FromNetworkName({ networkName });
    // client = await ElvClient.FromNetworkName({networkName});

    let wallet = client.GenerateWallet();
    let signer = wallet.AddAccount({
      privateKey: await getPrivateKey(),
    });
    console.log("privKey:", await getPrivateKey());
    client.SetSigner({ signer });
    //client.SetSigner(signer);
    client.ToggleLogging(false);

    console.log("client.signer", signer);
    // Call the oracle cross-chain 'view' API 'balance'
    // console.log("client.CurrentAccountAddress()", client.CurrentAccountAddress())

    let xcoResp = await XcoView({
      contentSpaceId: client.ContentSpaceId(),
      signer: signer,
    });
    console.log("[main] FABRIC ACCESS TOKEN: ", JSON.stringify(xcoResp));
    console.log("[main] FABRIC ACCESS TOKEN(2): ", xcoResp);
    // console.log("xcoResp decoded: ", await client.utils.DecodeSignedToken(xcoResp));

    //setEluvioStream("https://embed.v3.contentfabric.io//?net=main&p&ct=h&vid=hq__DXT6WtfrVeg7bC3jgMoLpcRHLFDnu9xYHyLqWZH3K5C4LJfErBuedrqUGqmLWF8FwTqLqo6m9&ath=acspjc58ndqqEHAsmu5nhCfkxnLuNvZm5kRTRVZAbHfTzKwMze36uamVyhuVUu3xrrSq9gGxeYP6hXhGgGNX1gVkzuiLhx1Gy63AiKv3wRTCkWNuf1gUka8ZcNuMWBZsjaXStG9LpHR9USvfgFhHTnMoQEPeDrY6juNvEFNSwkZycuACQ6uDW8RK8GxiGuN91Li7GcdPpPjGAnayhzaBVW7F9UDj6f1zAKLW3c7gam8RyqSrTpMWasXDFNaCddgv42KmCf3yJN11eLRFJutVYofhe9LdwuQJtKzf");
    const video =
      "hq__DXT6WtfrVeg7bC3jgMoLpcRHLFDnu9xYHyLqWZH3K5C4LJfErBuedrqUGqmLWF8FwTqLqo6m9";
    // const vid = "hq__93SK4rgxMarq1ZeDSEu9WJkDoptTKYiA2GmYocK7inMthUssGkG6Q9BREBEhNtVCiCBFsPd4Gd";

    //const token = JSON.stringify(xcoResp);
    const accessToken = xcoResp.token;
    client.SetStaticToken({ token: accessToken });

    // console.log( "[1] DecodeSignedToken(xcoResp):", client.utils.DecodeSignedToken(accessToken));

    console.log("step 1");
    setEluvioStream(
      "https://embed.v3.contentfabric.io//?net=main&p&ct=h&vid=" +
        video +
        "&ath=" +
        accessToken
    );

    console.log("eluvioStream:", eluvioStream);

    console.log( "DecodeSignedToken(xcoResp):", client.utils.DecodeSignedToken(accessToken));
    // const accessToken = xcoResp.token;
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    //const rpc = new RPC(provider);
    //const privateKey = await rpc.getPrivateKey();
    //console.log(privateKey);
    //return privateKey;
    return process.env.REACT_APP_PRIVATE_KEY;
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
    const address = await signer.getAddress();
    // const address = userAddress;

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

    const signature = await signer.signMessage(message);

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

    // const ethersProvider = new ethers.providers.Web3Provider(provider);
    // const signer = ethersProvider.getSigner();

    // await client.SetSignerFromWeb3Provider(ethersProvider);

    // Create a client-signed access token  in order to access the cross-chain oracle API
    let xcoToken = await CreateOracleAccessToken({
      duration: 1 * 1000, // millisec
      contentSpaceId: contentSpaceId,
      signer: signer,
      });
    console.log("ORACLE ACCESS TOKEN", xcoToken);

    // Format cross-chain oracle request
    const xcoReq = {
        chain_type: "eip155",
        chain_id: "5", // 5
        // chain_id: "955305",
        asset_type: "erc721",
        asset_id: "0xd4c8153372b0292b364dac40d0ade37da4c4869a", //0x8d5229b3C84CF9157db6e72932BcEf2FcEc92fD1
        method: "balanceOf"
      };
      console.log("xcoReq: ", xcoReq);

      // Call the cross-chain oracle 'view' API
    try {
      let res = await Utils.ResponseToFormat(
        "json",
        client.authClient.MakeAuthServiceRequest({
          method: "POST",
          path: "/as/xco/view", // On main/dev net /as/xco/view
          body: xcoReq,
          headers: {
            Authorization: `Bearer ${xcoToken}`,
          },
        })
      );
      console.log("ORACLE ACCESS TOKEN (res)", res);
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
    const nftNetwork = 5 // Goerli
    const nftContractAddress = "0x8d5229b3C84CF9157db6e72932BcEf2FcEc92fD1" // https://goerli.etherscan.io/address/0x8d5229b3c84cf9157db6e72932bcef2fcec92fd1#code
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
    } else {
      setChecked("Sorry, it seems like you're not the owner of the required NFT. 😿 \n \n To get one, just ask Julien.")
    }
  };

  console.log("isOwner:", isOwner)
    
  return (
    <PlasmicPlay
      root={{ ref }}
      {...props}
      videoBox={{
        props: {
          children: isOwner === false ? (
            // <img src={loader} alt={loader} />
            "no stream for you"
           
          ) : (
            <iframe
              // https://stackoverflow.com/questions/217776/how-to-apply-css-to-iframe
              // width={100}
              // height={480}
              // frameborder="0" 
              // border="0" 
              // cellspacing="0"
              //style={{"border-style: none;width: 100%; height: 120px"}}
              title="eluvioStream"
              src={eluvioStream}
            />

          ),
        },
      }}

    />
  );
}
const Play = React.forwardRef(Play_);
export default Play;
