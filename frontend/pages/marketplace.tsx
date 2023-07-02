import { CONTRACT_ADDRESS } from "@/constants";
import { useTezosContext } from "@/contexts/TezosContext";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { TBuyParameters, TOfferUI } from "@/types/TStorage";
import fetchOffers from "@/utils/fetchOffers";
import OfferList from "@/components/OfferList";
import Alert from "@/components/Alert";

export default function Marketplace() {
  const [error, setError] = useState("");
  const [offers, setOffers] = useState<TOfferUI[]>([]);
  const { tezos, address } = useTezosContext();

  const buy = async ({
    seller,
    quantity,
    token_id,
    amount,
  }: TBuyParameters) => {
    const contract = await tezos.wallet.at(CONTRACT_ADDRESS);

    const tx = await contract.methods
      .buy(quantity, seller, token_id)
      .send({ amount, mutez: true });

    const status = await tx.confirmation();

    if (status.completed) {
      alert("Purchase confirmed!");
      const offers_ = await fetchOffers(tezos);
      setOffers(offers_);
    }
  };

  useEffect(() => {
    try {
      fetchOffers(tezos).then((offers_) => setOffers(offers_));
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Unknown error");
      }
    }
  }, []);

  return (
    <>
      <Header />

      <main className="flex flex-wrap p-4 justify-center mt-8">
        {error && <Alert message={error} variant="error" />}

        {address ? (
          <OfferList offers={offers} buy={buy} />
        ) : (
          <Alert message="Please connect your wallet" variant="info" />
        )}
      </main>
    </>
  );
}
