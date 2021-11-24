import { ethers } from "ethers";
import Token from "./artifacts/contracts/Token.sol/Token.json";

const tokenAddress = "0x018E81f773587F372F4e6D1d06A6296eC822e9f3";

async function requestAccount() {
  //this would prompt the metamask when app starts
  const account = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return account;
}

async function getContract() {
  if (typeof window.ethereum !== "undefined") {
    const [account] = await requestAccount();
    // const [account] = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, Token.abi, signer);

    return { contract, account };
  }
}

export { getContract };
