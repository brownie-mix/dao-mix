// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import '@openzeppelin/contracts/access/AccessControl.sol';
import '../governance_standard/GovernanceTimeLock.sol';

contract RoleMultiCall is AccessControl {
    function multiCall(address target, bytes[] calldata encodedFunctions)
        external
        returns (bytes[] memory)
    {
        bytes[] memory results = new bytes[](encodedFunctions.length);
        for (uint256 i; i < encodedFunctions.length; i++) {
            (bool success, bytes memory result) = target.call(
                encodedFunctions[i]
            );
            require(success, 'multi call failed');
            results[i] = result;
        }
        return results;
    }
}
