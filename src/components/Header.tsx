/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/jungle_fever/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "../ethersRPC";
import { shortenAddress } from '@usedapp/core'
import { useGlobalContext } from './Web3Context';
import loader from './loader.svg';

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {

  const clientId = String(process.env.REACT_APP_WEB3_AUTH_CLIENT_ID);
  const endpoint = String(process.env.REACT_APP_GOERLI_RPC_URL);
  // REACT_APP_YOUTUBE_VIDEO_ID=nNbM781v7M0

  const [etherscanLink, setEtherscanLink] = useState("");

  const { 
    web3auth, setWeb3auth,
    provider, setProvider,
    userAddress, setUserAddress,
    // bal, setBal,
    userShortenAddr, setShortenAddr,
    // etherscanLink, setEtherscanLink,
    // txHash, setTxHash,
    // net, setNet,
    // firstName, setFirstName,
    // pfp, setPfp
  } = useGlobalContext()

  useEffect(() => {
    const init = async () => {
      try {

      const web3auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x5",
          rpcTarget: endpoint,
        },
      });

      setWeb3auth(web3auth);

      await web3auth.initModal();

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        };
            
      console.log("end of init (user addr):", userAddress)

      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    getAccounts()
  }, [provider]);

  const toggle = async () => {
    if (provider) {
      await logout();
    } else {
      await login();
    }
  }

  const login = async () => {
    if (!web3auth) {
      // console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  // // const getUserInfo = async () => {
  // //   if (!web3auth) {
  // //     // console.log("web3auth not initialized yet");
  // //     return;
  // //   }
  // //   const user = await web3auth.getUserInfo();
  // //   console.log(user);
  // // };

  const logout = async () => {
    if (!web3auth) {
      // console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  // // const getChainId = async () => {
  // //   if (!provider) {
  // //     // console.log("provider not initialized yet");
  // //     return;
  // //   }
  // //   const rpc = new RPC(provider);
  // //   const chainId = await rpc.getChainId();
  // //   console.log(chainId);
  // // };

  const getAccounts = async () => {
    console.log("getAccounts executed #1")
    if (!provider) {
      // console.log("provider not initialized yet");
      return;
    }
    console.log("getAccounts executed #2")

    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    // console.log(address);
    setUserAddress(address);
    setShortenAddr(shortenAddress(address))
    setEtherscanLink("https://goerli.etherscan.io/address/" + address);
    console.log("getAccounts executed #3")
  };
  // getAccounts(); // bad 

  // const getBalance = async () => {
  //   if (!provider) {
  //     // console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const balance = await rpc.getBalance();
  //   // console.log(balance);
  //   setBal(Number(balance))
  // };
  // getBalance()

  // const sendTransaction = async () => {
  //   if (!provider) {
  //     // console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const receipt = await rpc.sendTransaction();
  //   console.log(receipt);
  // };

  // const signMessage = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const signedMessage = await rpc.signMessage();
  //   console.log(signedMessage);
  // };

  // const getPrivateKey = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const privateKey = await rpc.getPrivateKey();
  //   console.log(privateKey);
  // };

  // console.log("provider:", provider)

  return <PlasmicHeader root={{ ref }} {...props} 
  
    login={{
      props: {
        children: (!provider ? "Login" : "Logout"),
        onClick: () => toggle()
      }
    }}

    userAddressBox={{
      props: {
        children: (!provider ? <img style = {{maxHeight:26}} alt = "loader" src={loader} /> : userShortenAddr),
        href: etherscanLink
      }
    }}
  
  />;
}

const Header = React.forwardRef(Header_);
export default Header;
