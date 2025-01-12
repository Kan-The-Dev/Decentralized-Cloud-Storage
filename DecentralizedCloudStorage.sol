// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedCloudStorage {
    struct File {
        uint256 fileId;
        address uploader;
        uint256 size;
        uint256 timestamp;
        string encryptedIpfsHash;
        uint256 amountPaid;
        address[] authorizedUsers;
    }

    mapping(uint256 => File) public files;

    event FileUploaded(uint256 fileId, address uploader, uint256 size, string encryptedIpfsHash);
    event PaymentMade(address indexed payer, uint256 indexed fileId, uint256 amount);

    uint256 private fileIdCounter;

    function uploadFile(uint256 _size, string memory _encryptedIpfsHash) public {
        fileIdCounter++;
        uint256 newFileId = fileIdCounter;

        files[newFileId] = File({
            fileId: newFileId,
            uploader: msg.sender,
            size: _size,
            timestamp: block.timestamp,
            encryptedIpfsHash: _encryptedIpfsHash,
            amountPaid: 0,
            authorizedUsers: new address[](0) // Initialize with an empty array
        });

        emit FileUploaded(newFileId, msg.sender, _size, _encryptedIpfsHash);
    }

    function payForStorage(uint256 _fileId, uint256 _amount) public payable {
        require(msg.value == _amount, "Incorrect payment amount");
        require(files[_fileId].fileId != 0, "File not found");

        files[_fileId].amountPaid += _amount;

        emit PaymentMade(msg.sender, _fileId, _amount);
    }

    function addAuthorizedUser(uint256 _fileId, address _user) public {
        require(msg.sender == files[_fileId].uploader, "Only the uploader can add authorized users");
        files[_fileId].authorizedUsers.push(_user);
    }

    function isAuthorized(uint256 _fileId, address _user) public view returns (bool) {
        address[] memory authorizedUsers = files[_fileId].authorizedUsers;
        for (uint i = 0; i < authorizedUsers.length; i++) {
            if (authorizedUsers[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function getFile(uint256 _fileId) public view returns (File memory) {
        return files[_fileId];
    }

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    function withdraw(uint256 _amount) public onlyOwner {
        require(address(this).balance >= _amount, "Insufficient balance");
        payable(owner).transfer(_amount);
    }

    constructor() {
        owner = msg.sender;
    }
}
