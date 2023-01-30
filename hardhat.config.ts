import { HardhatUserConfig } from 'hardhat/config';
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
/** @type import('hardhat/config').HardhatUserConfig */

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 300
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337
    }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 21,
    enabled: true,
    onlyCalledMethods: true,
  }
}

export default config;