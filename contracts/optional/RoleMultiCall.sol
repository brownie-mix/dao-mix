// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract RoleMultiCall {
    function multiCall(
        address[] calldata targets,
        bytes[] calldata encodedFunctions
    ) external returns (bytes[] memory) {
        require(
            targets.length == encodedFunctions.length,
            'target length != encodedFunctions length'
        );

        bytes[] memory results = new bytes[](encodedFunctions.length);

        for (uint256 i; i < targets.length; i++) {
            (bool success, bytes memory result) = address(targets[i]).call(
                encodedFunctions[i]
            );

            require(success, 'multi call failed');
            results[i] = result;
        }

        return results;
    }
}
