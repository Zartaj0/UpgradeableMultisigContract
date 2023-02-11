// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.0;

import "./MultiSigV1.sol";

contract ZarFactoryV1 {
    event Created(MultiSigV1 walletAddress, address creator);

    function createWallet(address[] memory _owners, uint requiredSignature) external {
        MultiSigV1 wallet = new MultiSigV1(_owners,requiredSignature);

        emit Created(wallet, msg.sender);
    }
}
