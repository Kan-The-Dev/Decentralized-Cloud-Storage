// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedCloudStorage {
    // Struct for storing file data
    struct File {
        address owner;
        string fileHash;
        uint256 size;
        uint256 uploadTime;
    }

    // Mapping to store files by their unique ID
    mapping(uint256 => File) public files;
    uint256 public fileCount;

    // Event to notify about file uploads
    event FileUploaded(
        uint256 indexed fileId,
        address indexed owner,
        string fileHash,
        uint256 size,
        uint256 uploadTime
    );

    // Event to notify about file sharing
    event FileShared(
        uint256 indexed fileId,
        address indexed owner,
        address indexed recipient
    );

    // Function to upload a file
    function uploadFile(string memory _fileHash, uint256 _size) public {
        fileCount++;
        files[fileCount] = File(msg.sender, _fileHash, _size, block.timestamp);

        emit FileUploaded(fileCount, msg.sender, _fileHash, _size, block.timestamp);
    }

    // Function to share a file
    function shareFile(uint256 _fileId, address _recipient) public {
        require(files[_fileId].owner == msg.sender, "You are not the owner of this file.");

        emit FileShared(_fileId, msg.sender, _recipient);
    }

    // Function to pay for storage
    function payForStorage(uint256 _fileId, uint256 _amount) public payable {
        require(msg.value == _amount, "Incorrect payment amount.");
        // This is where you could implement logic for rewarding the storage provider
    }
}
