// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/governance/TimelockController.sol';

contract GovernanceTimeLock is TimelockController {
    // minDelay is how long you have to wait before executing
    // proposers is the list of addresses that can propose
    // executors is the list of addresses that can execute
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors) {}

    function encodeGrantProposerRole(address account)
        external
        view
        returns (bytes memory)
    {
        return
            abi.encodeWithSelector(
                this.grantRole.selector,
                this.PROPOSER_ROLE(),
                account
            );
    }

    function encodeGrantExecutorRole(address account)
        external
        view
        returns (bytes memory)
    {
        return
            abi.encodeWithSelector(
                this.grantRole.selector,
                this.EXECUTOR_ROLE(),
                account
            );
    }

    function encodeRevokeTimeLockRole(address account)
        external
        view
        returns (bytes memory)
    {
        return
            abi.encodeWithSelector(
                this.revokeRole.selector,
                this.TIMELOCK_ADMIN_ROLE(),
                account
            );
    }
}
