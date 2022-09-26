import { ethers } from "ethers";

async function getSigner(wallet: ethers.Wallet) {
  const provider = ethers.providers.getDefaultProvider("ropsten");
  const signer = wallet.connect(provider);
  console.log(`$signer: ${signer.address}`);
  return signer;
}

export async function connectWallet(privateKey: string) {
  const wallet: ethers.Wallet = new ethers.Wallet(privateKey);
  const signer = await getSigner(wallet);
  const address = signer.address;
  return { address };
}
