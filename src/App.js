import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import Token from "./artifacts/contracts/Token.sol/Token.json";

import { getContract } from "./getContract";

import "./App.css";

// const tokenAddress = "0x018E81f773587F372F4e6D1d06A6296eC822e9f3";

function App() {
  const [userAccount, setUserAccount] = useState("");
  const [amount, setAmount] = useState(0);

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState({});

  async function getBalance() {
    const balance = await contract.balanceOf(account);
    console.log("Balance: ", balance.toString());
  }

  async function sendCoins() {
    const transaction = await contract.transfer(userAccount, amount);
    await transaction.wait();
    console.log(`${amount} Coins successfully sent to ${userAccount}`);
  }

  useEffect(() => {
    async function fetchData() {
      const { contract, account } = await getContract();
      setAccount(account);
      setContract(contract);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
          value={greeting}
        /> */}

        <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendCoins}>Send Coins</button>
        <input
          onChange={(e) => setUserAccount(e.target.value)}
          placeholder="Account ID"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </header>
    </div>
  );
}

export default App;
