// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.0;

import "./MultiSigV2.sol";

contract ZarFactoryV2 {
    event Created(MultiSigV2 walletAddress, address creator);

    function createWallet(address[] memory _owners, uint requiredSignature) external {
        MultiSigV2 wallet = new MultiSigV2(_owners,requiredSignature);

        emit Created(wallet, msg.sender);
    }
}
