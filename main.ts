import { Alchemy, Utils, Network } from "alchemy-sdk";

require("dotenv").config();

const apiKey = process.env.ALCHEMY_API_KEY;
const settings = {
  apiKey: apiKey,
  network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);

const main = async () => {
  const contractAddress = "0xE5655276B48F60DBe208b04B17015F590c58dFcF";
  const eventSignature =
    "0x3ab2c75c4e55a2d802d3771abf5ac6a438c42fb2f61a54eb920c194660d5abf8";

  let logs = await alchemy.core.getLogs({
    fromBlock: "0x375D72",
    toBlock: "0x375D72",
    address: contractAddress,
    topics: [eventSignature],
  });

  console.log(logs);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
