import { useEffect, useRef, useState } from "react";
import TezosContext from "../contexts/TezosContext";
import { GHOSTNET_RPC_URL } from "../constants";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType, DAppClientOptions } from "@airgap/beacon-dapp";

const walletOptions: DAppClientOptions = {
  name: "Ameno DApp",
  preferredNetwork: NetworkType.GHOSTNET,
};

const TezosProvider = ({ children }: { children: React.ReactNode }) => {
  const [, setDummy] = useState(0);
  const tezos = useRef<TezosToolkit>(new TezosToolkit(GHOSTNET_RPC_URL));
  const wallet = useRef<BeaconWallet>();
  const [address, setAddress] = useState<string>();

  const connectWallet = async () => {
    try {
      if (wallet.current === undefined) return;

      console.log(GHOSTNET_RPC_URL);

      await wallet.current.client.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: GHOSTNET_RPC_URL,
        },
      });

      setAddress((await wallet.current.client.getActiveAccount())?.address);

      setDummy((p) => p + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (wallet.current === undefined) return;

      await wallet.current.clearActiveAccount();

      setAddress(undefined);

      setDummy((p) => p + 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    wallet.current = new BeaconWallet(walletOptions);
    tezos.current.setWalletProvider(wallet.current);
    setDummy((p) => p + 1);

    wallet.current?.client.getActiveAccount().then((account) => {
      if (account) {
        setAddress(account.address);
      }
    });
  }, []);

  return (
    <TezosContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        address,
        wallet: wallet.current,
        tezos: tezos.current,
      }}
    >
      {children}
    </TezosContext.Provider>
  );
};

export default TezosProvider;
