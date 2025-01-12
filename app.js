const Web3 = require('web3');
const { abi, evm } = require('./DecentralizedCloudStorage.json'); // ABI and Bytecode from the compiled contract

const web3 = new Web3('http://localhost:8545'); // Change this to your local network or Infura URL
const account = '0xYourAccountAddress'; // Replace with your Ethereum account address
const contractAddress = '0xYourContractAddress'; // Replace with your deployed contract address

const contract = new web3.eth.Contract(abi, contractAddress);

// Function to upload a file
async function uploadFile(size, encryptedIpfsHash) {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.uploadFile(size, encryptedIpfsHash)
      .send({ from: accounts[0] });

    console.log('File uploaded:', result);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

// Function to pay for storage
async function payForStorage(fileId, amount) {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.payForStorage(fileId, amount)
      .send({ from: accounts[0], value: amount });

    console.log('Payment made:', result);
  } catch (error) {
    console.error('Error paying for storage:', error);
  }
}

// Function to add an authorized user
async function addAuthorizedUser(fileId, userAddress) {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.addAuthorizedUser(fileId, userAddress)
      .send({ from: accounts[0] });

    console.log('Authorized user added:', result);
  } catch (error) {
    console.error('Error adding authorized user:', error);
  }
}

// Function to check if a user is authorized
async function isAuthorized(fileId, userAddress) {
  try {
    const result = await contract.methods.isAuthorized(fileId, userAddress).call();
    console.log('Is user authorized?', result);
    return result;
  } catch (error) {
    console.error('Error checking authorization:', error);
  }
}

// Example: Call the functions
uploadFile(1024, 'QmSomeEncryptedHash');
payForStorage(1, web3.utils.toWei('0.1', 'ether'));
addAuthorizedUser(1, '0xSomeUserAddress');
isAuthorized(1, '0xSomeUserAddress');
