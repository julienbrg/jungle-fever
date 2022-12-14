import Homepage from "./components/Homepage";
import Films from "./components/Films";
import Play from "./components/Play";
import About from "./components/About";
import Soon from "./components/Soon";
import Lyrics from "./components/Lyrics";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { Web3Context } from './components/Web3Context'
import { Web3Auth } from "@web3auth/web3auth";
import { SafeEventEmitterProvider } from "@web3auth/base";

function Index() {

  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const [signer, setSigner] = useState<any | null>(null);
  const [userAddress, setUserAddress] = useState<string>("")
  const [bal, setBal] = useState<number>(0);
  const [isOwner, setIsOwner] = useState<boolean>(false);

  const [userShortenAddr, setShortenAddr] = useState<string>("")
  // const [etherscanLink, setEtherscanLink] = useState("");
  // const [txHash, setTxHash] = useState("");
  // const [net, setNet] = useState("");
  // const [firstName, setFirstName] = useState("anon");
  // const [pfp, setPfp] = useState(loader); 

  return (
    <Web3Context.Provider value={{
      web3auth, setWeb3auth,
      provider, setProvider,
      userAddress, setUserAddress,
      bal, setBal,
      isOwner, setIsOwner,
      userShortenAddr, setShortenAddr,
      signer, setSigner,
      // etherscanLink, setEtherscanLink,
      // txHash, setTxHash,
      // net, setNet,
      // firstName, setFirstName,
      // pfp, setPfp
    }}>
      <Router basename={'/'}>
        <Routes>
          
          <Route path="/" element={<Homepage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
          <Route path="/soon" element={<Soon />} />
          <Route path="/lyrics" element={<Lyrics />} />

        </Routes>
      </Router>
    </Web3Context.Provider>
  );
}

export default Index;