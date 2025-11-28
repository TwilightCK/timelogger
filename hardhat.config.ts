import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    coston2: {
      url: "https://coston2-api.flare.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY!]
    }
  }
};

export default config;
