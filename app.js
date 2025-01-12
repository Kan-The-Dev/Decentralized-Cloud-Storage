// Required modules
const express = require('express');
const multer = require('multer');
const { create } = require('ipfs-http-client');
const ethers = require('ethers');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// IPFS client setup
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// Set up Express server
const app = express();
const port = 5000;

// Middleware to parse JSON and handle form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup file storage (local storage for uploaded files)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Route to upload a file to IPFS and log file on blockchain
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Upload the file to IPFS
    const file = req.file;
    const addedFile = await ipfs.add(file.buffer);

    // Get the file hash
    const fileHash = addedFile.path;

    // Call the smart contract to store file info (implement this later)
    // For now, we log the file hash
    console.log(`File uploaded to IPFS with hash: ${fileHash}`);

    res.json({ fileHash, message: 'File uploaded successfully!' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

// Route to share a file by sharing the file hash
app.post('/share', async (req, res) => {
  const { fileHash, recipientAddress } = req.body;

  // Call the smart contract to share the file (implement this later)
  console.log(`Sharing file with hash: ${fileHash} to ${recipientAddress}`);

  res.json({ message: 'File shared successfully!' });
});

// Route to make a payment for storage
app.post('/pay', async (req, res) => {
  const { fileId, amount } = req.body;

  try {
    // Payment logic (interact with smart contract later)
    console.log(`Payment for file ID ${fileId}: ${amount} ETH`);

    res.json({ message: 'Payment successful!' });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

// Set up the server to listen
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
