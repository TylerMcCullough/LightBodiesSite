import {
  ImmutableXClient,
  Link,
  ERC721TokenType,
  ETHTokenType,
} from "@imtbl/imx-sdk";
import { ethers } from "ethers";

const contractAddress = "0x4F766fF602a04068a4A8A4dD4aF947b565F4d74C";
// Mainnet
// const linkAddress = 'https://link.x.immutable.com';
// const apiAddress = 'https://api.x.immutable.com/v1';

// Ropsten Testnet
const linkAddress = "https://link.ropsten.x.immutable.com";
const apiAddress = "https://api.ropsten.x.immutable.com/v1";

export const initImmutableX = async () => {
  try {
    const link = new Link(linkAddress);

    const { address, starkPublicKey } = await link.setup({});

    localStorage.setItem("WALLET_ADDRESS", address);
    localStorage.setItem("STARK_PUBLIC_KEY", starkPublicKey);

    return address;
  } catch (error) {
    console.log(error);
  }
};

export const getBalances = async (address) => {
  try {
    const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });

    const balances = await client.getBalances({
      user: address,
    });
    const nfts = await client.getAssets({
      user: address,
      collection: contractAddress,
    });

    let imxBalance;
    let preparingBalance;
    let withdrawableBalance;

    if (balances) {
      imxBalance = ethers.utils.formatEther(balances.imx);
      preparingBalance = ethers.utils.formatEther(
        balances.preparing_withdrawal
      );
      withdrawableBalance = ethers.utils.formatEther(balances.withdrawable);
    }

    return {
      imxBalance,
      preparingBalance,
      withdrawableBalance,
      nfts: nfts.result,
    };
  } catch (error) {
    console.log(error);
  }
};
