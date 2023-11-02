// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract GovernanceTimeLock is TimelockController {
    // minDelay is how long you have to wait before executing
    // proposers is the list of addresses that can propose
    // executors is the list of addresses that can execute
    constructor(
        uint256 minDelay,
        address[] calldata proposers,
        address[] calldata executors
    ) TimelockController(minDelay, proposers, executors) {}
}
