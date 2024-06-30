// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {Script, console} from "forge-std/Script.sol";
import {EducationFunding} from "../src/BaseFunding.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DeployBaseFunding is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        IERC20 usdcToken = IERC20(0x34E8E400BE58476977EB37c18d3C005878AB6d0C); // Use the provided USDC token contract address on Sepolia testnet
        EducationFunding educationFunding = new EducationFunding(usdcToken);
        console.log("EducationFunding contract deployed at:", address(educationFunding));

        vm.stopBroadcast();
    }
}
