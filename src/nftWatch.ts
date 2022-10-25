import { ethers, utils } from "ethers";

export const nftWatch = async (callback:any) => {

	let callbackFunction = callback;
	let networkProvider = null as any;
	const rpcUrl = String(process.env.REACT_APP_GOERLI_RPC_URL);
	let contractsList: string[];
	// load with function start
	contractsList = ["0x8d5229b3C84CF9157db6e72932BcEf2FcEc92fD1"];

	// init provider
	networkProvider = new ethers.providers.JsonRpcProvider(rpcUrl);

	console.log("start Listening ...");
	//https://docs.ethers.io/v5/api/providers/provider/#Provider--event-methods
	//networkProvider.on("block", (blockNumber: number) => { parseBlock(blockNumber) });
	/*
	const filterContract = {
		//address: contractsList[0].toLowerCase()
		,
		topics: [
			utils.id("Transfer(address,address,uint256)")
		]
	}
	*/
	//const topicSets = [utils.id("Transfer(address,address,uint256)")];
	const topicSets = [] as any;
	networkProvider.on(topicSets, (log:any, event:any) => { onEvent("filterContract", log.topics, log, event); });


	// Public functions *****
	/*
	function Start() {
	}
	async function Stop() {
	}
	async function addContract() {
	}
	async function delContract() {
	}
	*/

	// Private functions *****
	// only for token
	async function onEvent(type:string, topics:any, log:any, event:any) {
		//console.log('onEvent type: ' + type);
		//console.log('onEvent (topics): ', topics);
		//console.log('onEvent (log): ', log);
		//console.log('onEvent (event): ', event);

		if (topics[3] === undefined) return;
		if (topics[1] === "0x0000000000000000000000000000000000000000000000000000000000000000") return;

		if(contractsList[0].toLowerCase() !== log.address.toLowerCase()) return;
		//console.log('onEvent (log): ', log);
		// from = 0x00000000000000000000000070456d078950db075283931d9be2e01b49f3e71e
		// to = 0x00000000000000000000000070456d078950db075283931d9be2e01b49f3e71e
		const from = topics[1].substring(26);
		const to = topics[2].substring(26);
		callbackFunction(log.address, "0x"+from, "0x"+to, topics[3]); // contractAddress, from, to, tokenId

	}
	/*
	async function parseBlock(blockNumber:number) {
		//
		//console.log("parseBlock: " + blockNumber);
		const result = await networkProvider.getBlockWithTransactions(blockNumber);
		console.log("parseBlock transactions.length: " + result.transactions.length);

		for (let i = 0; i < result.transactions.length; i++) {
			//console.log('transaction: ', result.transactions[i]);

			// check data
			//0xb6b55f25 + 64 + 64 + 64 = 202 (transferFrom)
			//if (result.transactions[i].data.length !== 202) continue;
			//0xa9059cbb + 64 + 64 = 138 (transfer)
			//if (result.transactions[i].data.length !== 138) continue;

			if (result.transactions[i].from === undefined || result.transactions[i].from === null) continue;
			if (result.transactions[i].to === undefined || result.transactions[i].to === null) continue;
			if (result.transactions[i].from === "0x0000000000000000000000000000000000000000000000000000000000000000") continue;
			if (result.transactions[i].to === "0x0000000000000000000000000000000000000000000000000000000000000000") continue;

			if(contractsList[0].toLowerCase() !== result.transactions[i].to.toLowerCase()) continue;
			//if(result.transactions[i].data.substring(0,10) !== "0xa9059cbb") continue;

			// to = contract
			console.log('transaction: ', result.transactions[i]);
			callbackFunction(result.transactions[i].to, result.transactions[i].from, "", ""); // contractAddress, from, to, tokenId
		}
	}
	*/
}