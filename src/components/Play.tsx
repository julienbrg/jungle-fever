import * as React from "react";
import { useState } from "react";
import {
  PlasmicPlay,
  DefaultPlayProps
} from "./plasmic/jungle_fever/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useGlobalContext } from './Web3Context';
import RPC from "../ethersRPC";
import YouTube from 'react-youtube';
import * as eluvio from "./eluvio";

export interface PlayProps extends DefaultPlayProps {}

const jungle = String(process.env.REACT_APP_YOUTUBE_VIDEO_ID); // "Jungle Fever" by Stevie Wonder

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  // console.log("eluvio: ", eluvio.privKey)

  // const [isOwner, setIsOwner] = useState("");
  const [checked, setChecked] = useState("Please make sure you're connected with the wallet holding the required NFT and click on the button below.");

  const opts = {
    // height: '390',
    // width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const { 
    // bal,
    provider,
    userAddress,
    isOwner, setIsOwner
  } = useGlobalContext()

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
    if (receipt === true) {
      setIsOwner(receipt)
    } else {
      setChecked("Sorry, it seems like you're not the owner of the required NFT. 😿 \n \n To get one, just ask Julien.")
    }
    
    };
    
  return <PlasmicPlay root={{ ref }} {...props} 
  
    textBox={{
      props: {
        children: (isOwner === false ? <iframe width={854} height={480}
          
          src={"https://embed.v3.contentfabric.io//?net=demo&p&ct=h&vid=hq__DXT6WtfrVeg7bC3jgMoLpcRHLFDnu9xYHyLqWZH3K5C4LJfErBuedrqUGqmLWF8FwTqLqo6m9&ath=acspjcB11eiKZ3u5ovZcp4om4bG737nEGfgFK8v9tLpKZd9z1uwS1Svj1Bwx2pfms4cYoYz6n3mXsRdwDKiVYH75Xmi6no7BNXbPip6nT4PcecpECce7ZySGXzvnh9VXAK99b9hp8FGhQmApqce2RLLDaSVQ24kq9xzz3vqDQFvDkoEXJenabCDfriPojv9HPRQuH7WAX5zr83nk9WCV7tqWsjkwyBpiwhyX21a8SkX7zwJYfJwyNZsLwN6RrGHdPuJXzCBZwtbQ1bpAVCJ4LVy8AD8CPBAjSmVcWfZ1vvQfaQCrDTVQUdzRfdxEZzYYR6tcqrVYiDAHSjpBqj1F1tLShCjUrLfqoGGManX8LL5oUXcLZfzsBn7VHFRYQ31Z58HAef3hCr5m9aP3txhpTbA51pfnrnoRfdnS2b8CCWVueKwSAhjVm3vyicpwn1TfgwrWcH7MHA2Xh3mURtSDPf3vGjjk"} /> 
        
        : checked )
      }
    }}

    verify={{
      props: {
        onClick: () => verifyOwnership()
      }
    }}
  
  />;
}

const Play = React.forwardRef(Play_);
export default Play;
