# Decentralized Cloud Storage

## Overview
This project implements a decentralized cloud storage system using blockchain technology. Files are encrypted and stored on IPFS (InterPlanetary File System); only authorized users can access them. Payments for storage are handled through a smart contract on the Ethereum blockchain.

## Features
- **File Upload**: Users can upload files with encryption for privacy.
- **Payment for Storage**: Users can make payments to store files on the blockchain.
- **Authorized Access**: Only authorized users can access the files.
- **File Retrieval**: Get details about the files stored, such as the file size, uploader, and encrypted IPFS hash.
- **Owner Withdrawals**: The contract owner can withdraw accumulated funds.
  
## Project Structure
1. **Solidity Contract (`DecentralizedCloudStorage.sol`)**: The project's core is the Solidity smart contract, which handles file uploads, payments, and access control.
2. **JavaScript File (`app.js`)**: This file contains the logic to interact with the Ethereum blockchain and IPFS.
3. **Frontend**: The front end allows users to interact with the decentralized cloud storage.

## Smart Contract Details
### `DecentralizedCloudStorage.sol`

This contract allows users to:
- Upload files with metadata (size, encrypted IPFS hash).
- Pay for storage.
- Add authorized users who can access the files.
- Check if a user is authorized to access a file.
- Withdraw funds from the contract (only accessible to the owner).

### Smart Contract Functions
1. **uploadFile**: Allows users to upload a file, specifying the file's size and encrypted IPFS hash.
2. **payForStorage**: Allows users to pay for the storage space.
3. **addAuthorizedUser**: Let the uploader add authorized users for their files.
4. **isAuthorized**: Checks if an address is authorized to access a file.
5. **getFile**: Retrieves the file details by its `fileId`.
6. **withdraw**: Allows the contract owner to withdraw funds from the contract.

### Constructor and Ownership
- The contract owner is set during deployment and can withdraw funds from the contract.

## JavaScript Code (`app.js`)
This JavaScript file interacts with the deployed Solidity contract to perform the following actions:
- Upload files and store them on IPFS.
- Pay for storage.
- Add authorized users to access files.
- Check if an address is authorized.

## How to Set Up
# Writing the steps into a readme2.md file

content = """
# Decentralized Cloud Storage Project

This project allows you to upload files securely to a decentralized cloud using Ethereum and IPFS.

---

## Step 1: Setting Up Your Tools
You need three main things:
1. **Ethereum Blockchain**: Where your smart contract will live.
2. **IPFS (InterPlanetary File System)**: Where your files will be stored.
3. **Your Computer**: Where the code will run.

---

## Step 2: Install the Needed Programs
1. **Install Node.js**: This will let you run JavaScript code.
   - Download it from [https://nodejs.org](https://nodejs.org) and install it.

2. **Install MetaMask**: A wallet to interact with Ethereum.
   - Install the MetaMask extension in your browser and set up an account.

3. **Install Ganache (Optional)**: If you don’t want to use real money, Ganache creates a fake blockchain for testing.
   - Download it from [https://trufflesuite.com/ganache](https://trufflesuite.com/ganache).

4. **Install Dependencies**:
   - Open a terminal or command prompt and type:
     ```bash
     npm install web3 ipfs-http-client
     ```

---

## Step 3: Deploy the Smart Contract
1. **Open Remix**: Go to [https://remix.ethereum.org](https://remix.ethereum.org).
2. **Copy the Solidity Code**: Paste the code (`DecentralizedCloudStorage.sol`) into Remix.
3. **Select the Compiler**: Use the compiler version `0.8.0`.
4. **Deploy the Contract**:
   - Select "Injected Web3" in Remix.
   - Connect MetaMask to Remix.
   - Click **Deploy**.

---

## Step 4: Note the Contract Address
- After deployment, Remix will give you a **contract address**. Copy it! You'll need this to interact with your contract.

---

## Step 5: Set Up IPFS
1. **Option 1: Install IPFS Locally**:
   - Download IPFS Desktop from [https://ipfs.tech](https://ipfs.tech) and install it.
   - Run it on your computer.

2. **Option 2: Use a Public IPFS Gateway**:
   - No need to install! You can use services like [Infura](https://infura.io) or [Pinata](https://www.pinata.cloud).

---

## Step 6: Run the JavaScript Code
1. **Open the JavaScript File**:
   - Save the `app.js` file.

2. **Edit the Contract Address**:
   - Find the line in the JavaScript code that says:
     ```javascript
     const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
     ```
   - Replace `"YOUR_CONTRACT_ADDRESS_HERE"` with the contract address you got in Step 4.

3. **Run the File**:
   - In your terminal, type:
     ```bash
     node app.js
     ```

---

## Step 7: Upload a File
1. **Use the `uploadFile` Function**:
   - In the terminal, follow the prompts to upload a file.
   - It will ask for:
     - **File Size**: Just type the file size in bytes.
     - **Encrypted IPFS Hash**: Use an IPFS tool to upload the file and get its hash. Paste it here.
   - Once uploaded, you’ll get a **File ID**.

2. **Pay for Storage**:
   - Use the `payForStorage` function in the JavaScript code.
   - Enter the **File ID** and the payment amount (in Ether).
   - Approve the transaction in MetaMask.

---

## Step 8: Authorize Users
1. Use the `addAuthorizedUser` function to allow someone else to access your file.
   - Provide the **File ID** and the Ethereum address of the user.
   - They’ll now be able to access the file.

---

## Step 9: Check File Details
- Use the `getFile` function in the JavaScript file to fetch details of the file.
- You’ll see details like:
  - File size
  - Uploader
  - Encrypted IPFS hash
  - Authorized users

---

## Step 10: Withdraw Money (For Owners)
- If you’re the contract owner, use the `withdraw` function to transfer funds from the contract to your wallet.
