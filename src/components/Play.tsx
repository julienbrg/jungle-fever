import * as React from "react";
// import { useState } from "react";
import {
  PlasmicPlay,
  DefaultPlayProps
} from "./plasmic/jungle_fever/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useGlobalContext } from './Web3Context';

export interface PlayProps extends DefaultPlayProps {}

const jungle = String(process.env.REACT_APP_YOUTUBE_VIDEO_ID); // "Jungle Fever" by Stevie Wonder

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  // const [isOwner, setIsOwner] = useState("");

  const { 
    // bal,
    // provider,
    userAddress,
    isOwner, setIsOwner
  } = useGlobalContext()

  const action = async () => {

    console.log("clicked")

    // if (!provider) {
    //   console.log("provider not initialized yet");
    //   return;
    // }

    // if (isOwner === false) {
    //   setIsOwner(true)
    // }

      if (isOwner === false) {
        setIsOwner(true)
      } else {
        setIsOwner(false)
    }
  console.log("userAddress:", userAddress)
    
  }

  return <PlasmicPlay root={{ ref }} {...props} 
  
    textBox={{
      props: {
        children: (isOwner === true ? "You are the happy owner of the NFT! 🎉 \n \n ...so here's your vid, my friend: " + jungle + "" : "" )
      }
    }}

    verify={{
      props: {
        onClick: () => action()
      }
    }}
  
  />;
}

const Play = React.forwardRef(Play_);
export default Play;
