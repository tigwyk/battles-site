import { useWeb3React } from "@web3-react/core";
import useContract from "../hooks/useContract";
import NFT_ABI from "../lib/TestNFT.json";
import AddToMetaMask from "./AddToMetamask";
import { Button } from '@pancakeswap-libs/uikit'

const TestNFT = () => {
  const { account, chainId } = useWeb3React();
  const contractAddress = {
  // Polygon Mainnet
  1666600000: "",
  // Polygon Testnet
  1666700000: "0xB44cf912E9D0341e92f64f4a0642393B7f3526C4"
  }
  const contract = useContract(contractAddress[chainId],NFT_ABI,true);
  /*
  console.log(account);
  console.log(chainId);
  console.log(FAUCET_ABI);
  console.log(contractAddress);
  console.log(contract);
  */
  if(typeof contract != "undefined") {
    return (
      <span>
      <Button onClick={() => { contract.faucetDrip(); }} variant="primary"> 
      Click here to PULL from the faucet!
      </Button>
      <br />
      <center><AddToMetaMask /></center>
      </span>
    );
  } else {
    return (
      <label>Not connected to wallet</label>
    );
  }
};

export default TestNFT;
