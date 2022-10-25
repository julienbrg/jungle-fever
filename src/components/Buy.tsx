import * as React from "react";
import { PlasmicBuy, DefaultBuyProps } from "./plasmic/jungle_fever/PlasmicBuy";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useState, useEffect } from "react";
import { useGlobalContext } from './Web3Context';
import RPC from "../ethersRPC";
import { mnemonicToEntropy } from "ethers/lib/utils";
import { useNavigate } from "react-router-dom";
import loader from './loader.svg';

import './buy.css';

export interface BuyProps extends DefaultBuyProps {

}

function Buy_(props: BuyProps, ref: HTMLElementRefOf<"div">) {

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false)
  //const [msg, setMsg] = useState<string>("")
  const [msgId, setMsgId] = useState<number>(0)
  //let message = [""]
  
  const {
    // web3auth,
    // setWeb3auth,
    provider,
    // setProvider,
    userAddress,
    isOwner,
    setIsOwner,
    bal,
    setBal,
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
      //setMsg("Please login first.")
      setMsgId(1);
      setLoading(false)
      return;

    }

    const newBal = await getBalance()

    console.log("newBal:", newBal)

    if (newBal === 0) {
      const myMsg = "You currently don’t have enough ETH. \n\n Your ETH wallet address is: \n\n"+ userAddress + "\n\n" + "Please fund your account using" + '<a target="blank" style={{color:"red", fontWeight: "bold"}} href="https://buy.moonpay.com">Moonpay</a>'
      //setMsg(myMsg)
      setMsgId(2);
      setLoading(false)
      return;
    }

    //setMsg("")
    setMsgId(0);

    const nftContractAddress = "0x6ab72024c73de3a7358233328c7ce94abb007ac1"

    if (!provider) {
      // console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.mint(nftContractAddress);
    console.log(receipt);
    
    window.location.reload();
    setLoading(false)
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
    console.log("balanceRaw", balanceRaw)
    setBal(balanceRaw);
    return balanceRaw;
  };

  return <PlasmicBuy root={{ ref }}
  
  msgBox={{
    props: {
      //children: <p style={{color:"red", fontWeight: 'bold'}}>{msg}</p>
      // children: (msg !== "" ? <><p style={{color:"red", fontWeight: 'bold'}}>{msg}</p><p><a target='blank' style={{color:"red", fontWeight: 'bold'}} href='https://buy.moonpay.com'>https://buy.moonpay.com</a></p></> : "")

      children: (
        msgId === 0 ? <p style={{color:"red", fontWeight: 'bold'}}></p> :
        msgId === 1 ? <p style={{color:"red", fontWeight: 'bold'}}>Please login first.</p> :
        msgId === 2 && <p style={{color:"red", fontWeight: 'bold'}}>
          You currently don’t have enough ETH.<br/>Your ETH wallet address is:<br/>{userAddress}<br/>Please fund your account using <br />
          <a target='blank' style={{color:"red", fontWeight: 'bold'}} href='https://buy.moonpay.com'>https://buy.moonpay.com</a>
          </p>
      )

    }
  }}

  buyButton={{
    props: {
      children: (loading ? <img style = {{maxHeight:26}} alt = "loader" src={loader} /> : "Buy"),
      onClick: () => buy()
    },
  }}

  // img={{
  //   props: {
  //     marginTop:"0px"
  //   } as any
  // }}
  
  
  />;
}

const Buy = React.forwardRef(Buy_);
export default Buy;
