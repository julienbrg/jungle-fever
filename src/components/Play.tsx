import * as React from "react";
import {
  PlasmicPlay,
  DefaultPlayProps
} from "./plasmic/jungle_fever/PlasmicPlay";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// nNbM781v7M0 

export interface PlayProps extends DefaultPlayProps {}

function Play_(props: PlayProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicPlay root={{ ref }} {...props} />;
}

const Play = React.forwardRef(Play_);
export default Play;
