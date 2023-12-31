import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  // Private key of the account used to deploy
  const wallet = new Wallet("0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110");
  const deployer = new Deployer(hre, wallet);
  const soulBoundArtifact = await deployer.loadArtifact("SoulBoundNFT");

  const factory = await deployer.deploy(soulBoundArtifact);

  console.log(`SoulBound address: ${factory.address}`);
}
