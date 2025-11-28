// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TimeLogger {
    mapping(address => uint256) public currentStart;

    event LogStarted(address indexed user, uint256 start);
    event LogStopped(address indexed user, uint256 start, uint256 end, uint256 duration, bytes32 noteHash, bytes32 indexed entryId);

    function start() external {
        require(currentStart[msg.sender] == 0, "already running");
        currentStart[msg.sender] = block.timestamp;
        emit LogStarted(msg.sender, block.timestamp);
    }

    function stop(bytes32 noteHash) external {
        uint256 startTs = currentStart[msg.sender];
        require(startTs != 0, "no running timer");

        uint256 endTs = block.timestamp;
        uint256 dur = endTs - startTs;

        bytes32 entryId = keccak256(
            abi.encodePacked(msg.sender, startTs, endTs, noteHash)
        );

        emit LogStopped(msg.sender, startTs, endTs, dur, noteHash, entryId);

        currentStart[msg.sender] = 0;
    }

    function isRunning(address user) external view returns (bool) {
        return currentStart[user] != 0;
    }
}
