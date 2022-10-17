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
// import YouTube from 'react-youtube';
import { nftWatch } from "../nftWatch";
import * as eluvio from "./eluvio";

export interface PlayProps extends DefaultPlayProps {}

// const jungle = String(process.env.REACT_APP_YOUTUBE_VIDEO_ID); // "Jungle Fever" by Stevie Wonder

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  const [checked, setChecked] = useState(
    "Please make sure you're connected with the wallet holding the required NFT and click on the button below."
  );
  const [eluvioStream, setEluvioStream] = useState("");

  const vid = "hq__DXT6WtfrVeg7bC3jgMoLpcRHLFDnu9xYHyLqWZH3K5C4LJfErBuedrqUGqmLWF8FwTqLqo6m9";

  // const opts = {
  //   // height: '390',
  //   // width: window.innerWidth,
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  const {
    // web3auth,
    // setWeb3auth,
    provider,
    setProvider,
    userAddress,
    isOwner,
    setIsOwner
    // setUserAddress,
    // userShortenAddr,
    // setShortenAddr,
    // signer,
    // setSigner,
  } = useGlobalContext();

  useEffect(() => {
    nftWatch(nftWatchCallback);
    verifyOwnership()
    const accessToken = "placeholder" // placeholder
    setEluvioStream(
      "https://embed.v3.contentfabric.io//?net=main&p&ct=h&vid=" +
        vid +
        "&ath=" +
        accessToken
    );

  }, [provider]);

  const nftWatchCallback = async (contract:string, from:string, to:string, tokenId:string) => {
    console.log('nftWatchCallback (contract): ',contract);
    console.log('nftWatchCallback (from): ',from);
    console.log('nftWatchCallback (to): ',to);
    //console.log('nftWatchCallback (tokenId): ',tokenId);
    verifyOwnership()
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
    console.log(receipt);
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
              width={854}
              height={480}
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
