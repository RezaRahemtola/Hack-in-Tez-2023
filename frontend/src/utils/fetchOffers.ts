import { CONTRACT_ADDRESS } from "@/constants";
import { TOfferUI, TStorage } from "@/types/TStorage";
import { TezosToolkit } from "@taquito/taquito";
import fetchTokenMetadata from "./fetchTokenMetadata";

const fetchOffers = async (tezos: TezosToolkit) => {
  const contract = await tezos.contract.at(CONTRACT_ADDRESS);
  const storage = (await contract.storage()) as TStorage;

  const offers_: TOfferUI[] = [];

  for (const [key, value] of storage.offers.entries()) {
    const seller_address = key[0];
    const token_id = key[1].toNumber();
    const offerMetadata = await fetchTokenMetadata(storage, key[1].toNumber());

    offers_.push({
      ...offerMetadata,
      ...value,
      token_id,
      seller_address,
    });
  }

  return offers_;
};

export default fetchOffers;
