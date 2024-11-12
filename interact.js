const { ethers } = require("ethers");

// Connect to an Ethereum provider (e.g., MetaMask or Infura)
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// The smart contract ABI (Application Binary Interface)
const abi = [
  "function setGreeting(string memory _greeting) public",
  "function getGreeting() public view returns (string memory)"
];

// The deployed contract address (you'll replace this with the actual address after deploying)
const contractAddress = "0xYourDeployedContractAddressHere";

// Create a contract instance
const helloWorldContract = new ethers.Contract(contractAddress, abi, signer);

// Function to read the greeting
async function getGreeting() {
  const greeting = await helloWorldContract.getGreeting();
  console.log("Current Greeting:", greeting);
}

// Function to set a new greeting
async function setGreeting(newGreeting) {
  const tx = await helloWorldContract.setGreeting(newGreeting);
  await tx.wait(); // Wait for the transaction to be mined
  console.log("Greeting updated to:", newGreeting);
}

// Usage
getGreeting();             // Get the initial greeting
setGreeting("Hello, Ethereum!"); // Set a new greeting
