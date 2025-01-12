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
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/decentralized-cloud-storage.git
   cd decentralized-cloud-storage
