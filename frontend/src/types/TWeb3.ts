import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

type TWeb3 = {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  address: string | undefined;
  wallet: BeaconWallet | undefined;
  tezos: TezosToolkit;
};

export default TWeb3;
