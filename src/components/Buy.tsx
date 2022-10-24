import * as React from "react";
import { PlasmicBuy, DefaultBuyProps } from "./plasmic/jungle_fever/PlasmicBuy";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState, useEffect } from "react";
import { useGlobalContext } from './Web3Context';
import RPC from "../ethersRPC";
import { mnemonicToEntropy } from "ethers/lib/utils";
import { useNavigate } from "react-router-dom";
import loader from './loader.svg';

export interface BuyProps extends DefaultBuyProps {

}

function Buy_(props: BuyProps, ref: HTMLElementRefOf<"div">) {

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>("")
  
  const {
    // web3auth,
    // setWeb3auth,
    provider,
    // setProvider,
    userAddress,
    isOwner,
    setIsOwner,
    bal,
    setBal
    // setUserAddress,
    // userShortenAddr,
    // setShortenAddr,
    // signer,
    // setSigner,
  } = useGlobalContext();

  const buy = async () => {

    setLoading(true)

    if (!provider) {
      console.log("provider not initialized yet");
      setMsg("Please login first.")
      setLoading(false)
      return;

    }

    await getBalance()

    console.log("bal:", bal)


    if (bal === 0) {
      setMsg("Please get yourself a handful of ETH at https://buy.moonpay.com")
      setLoading(false)
      return;
    }

    setMsg("")

    const nftContractAddress = "0x6ab72024c73de3a7358233328c7ce94abb007ac1"

    if (!provider) {
      // console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.mint(nftContractAddress);
    console.log(receipt);
    
    navigate("/play")
  };

  const getBalance = async () => {
    if (!provider) {
      // console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balanceRaw = await rpc.getBalance();
    // const balanceFormatted = Number(balanceRaw).toFixed(5);
    // const balance = String(balanceFormatted) + " ETH"
    setBal(balanceRaw);
  };

  return <PlasmicBuy root={{ ref }} {...props} 
  
  msgBox={{
    props: {
      children: <p style={{color:"red", fontWeight: 'bold'}}>{msg}</p>
    }
  }}

  buyButton={{
    props: {
      children: (loading ? <img style = {{maxHeight:26}} alt = "loader" src={loader} /> : "Buy"),
      onClick: () => buy()
    },
  }}  
  
  
  />;
}

const Buy = React.forwardRef(Buy_);
export default Buy;
