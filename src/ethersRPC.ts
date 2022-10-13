import type { SafeEventEmitterProvider } from "@web3auth/base";
import { ethers } from "ethers";
import { abi } from "./nftAbi"

export default class EthereumRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  async getChainId(): Promise<any> {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      // Get the connected Chain's ID
      const networkDetails = await ethersProvider.getNetwork();
      return networkDetails.chainId;
    } catch (error) {
      return error;
    }
  }

  async getAccounts(): Promise<any> {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();

      // Get user's Ethereum public address
      const address = await signer.getAddress();

      return address;
    } catch (error) {
      return error;
    }
  }

  async getBalance(): Promise<string> {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();

      // Get user's Ethereum public address
      const address = await signer.getAddress();

      // Get user's balance in ether
      const balance = ethers.utils.formatEther(
        await ethersProvider.getBalance(address) // Balance is in wei
      );

      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(): Promise<any> {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();

      const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";

      // Convert 1 ether to wei
      const amount = ethers.utils.parseEther("0.001");

      // Submit transaction to the blockchain
      const tx = await signer.sendTransaction({
        to: destination,
        value: amount,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });

      // Wait for transaction to be mined
      const receipt = await tx.wait();

      return receipt;
    } catch (error) {
      return error as string;
    }
  }

  async signMessage() {
    try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();

      const originalMessage = "YOUR_MESSAGE";

      // Sign the message
      const signedMessage = await signer.signMessage(originalMessage);

      return signedMessage;
    } catch (error) {
      return error as string;
    }
  }

  async getPrivateKey(): Promise<any> {
    try {
      const privateKey = await this.provider.request({
        method: "eth_private_key",
      });

      return privateKey;
    } catch (error) {
      return error as string;
    }
  }

  // async verifyOwnership(nftNetwork:number, nftContractAddress:string, nftId:number): Promise<boolean> {
    async verifyOwnership(nftNetwork:number, nftContractAddress:string): Promise<any> {
      try {
      const ethersProvider = new ethers.providers.Web3Provider(this.provider);
      const signer = ethersProvider.getSigner();

      // Get user's Ethereum public address
      const address = await signer.getAddress();

      const contract = new ethers.Contract(nftContractAddress, abi, signer)
      if(await contract.balanceOf(address) > 0) {
        return true;
      }
      else {
        return false;
      }
      /*
      let matching

      for (let i=1;i<=42;i++) {
        const isOwner = await contract.ownerOf(i);
        console.log("isOwner: ", isOwner, "i: ", i)
        if (address === isOwner) {
          matching = true
          return true
        } else {
          matching = false
          return true
        }
      }
      */



      if (await contract.balanceOf(address) > 0) {
        return true
      } else {
        return false
      }
      
    } catch (error) {
      return error as any;
    }
  }

  // async mint(name:any, symbol:any, uri:any): Promise<any> {

  //   try {

  //     // console.log("step 1")
  //     const ethersProvider = new ethers.providers.Web3Provider(this.provider);
  //     const signer = ethersProvider.getSigner();
  //     const factory = new ethers.ContractFactory(nft.abi, nft.bytecode, signer);
  //     const tx = await factory.deploy(name, symbol, uri);
  //     // console.log("step 2")

  //     await ethersProvider.waitForTransaction(tx.deployTransaction.hash);

  //     // console.log("provider.waitForTransaction :" + contract.address);
  //     // console.log("step 3")

  //     console.log("mint tx:", tx)

  //     return tx.deployTransaction.hash;

  //   } catch (error:any) {
  //     console.log("An error occured during the minting process.")
  //     console.error(`${error.message} ${error.error}`);
  //     return null;
  //   }
  // }



}