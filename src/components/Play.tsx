import * as React from "react";
import { useState } from "react";
import {
  PlasmicPlay,
  DefaultPlayProps
} from "./plasmic/jungle_fever/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import RPC from "../ethersRPC";
import { useGlobalContext } from './Web3Context';

// nNbM781v7M0 = YouTube ID of Jungle Fever by Stevie Wonder

export interface PlayProps extends DefaultPlayProps {}

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  const [isOwner, setIsOwner] = useState(false);

  const { 
    bal,
    provider
  } = useGlobalContext()

  const verifyOwnership = async () => {
    // if (!provider) {
    //   console.log("provider not initialized yet");
    //   return;
    // }
    // const rpc = new RPC(provider);
    // const verifyOwnership = await rpc.verifyOwnership();
    // console.log("ownership verified:", verifyOwnership);

    setIsOwner(true);
    
  }

  // console.log("isOwner:", isOwner)

  return <PlasmicPlay root={{ ref }} {...props} 
  
    textBox={{
      props: {
        // children: ( isOwner === true ? "You're the happy owner of the NFT" : "Current balance: " + bal + " ETH" )
        children: (!provider ? "" : "You're the happy owner of the NFT! 🎉")
      }
    }}

    play={{
      // props: {
      //   // onClick: () => verifyOwnership()
      //   render = () => null
      // }
      
      render: () => null
    }}
  
  />;
}

const Play = React.forwardRef(Play_);
export default Play;
