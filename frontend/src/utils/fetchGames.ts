import { CONTRACT_ADDRESS } from "@/constants";
import { TAddress, TGame, TStorage } from "@/types/TStorage";
import { BigMapAbstraction, TezosToolkit } from "@taquito/taquito";
import { BigNumber } from "bignumber.js";
import fetchTokenMetadata from "./fetchTokenMetadata";

const fetchGames = async (tezos: TezosToolkit, address: TAddress) => {
  const contract = await tezos.contract.at(CONTRACT_ADDRESS);
  const storage = (await contract.storage()) as TStorage;

  const myTokens = storage.owner_token_ids
    .filter((e) => e[0] === address)
    .map((e) => e[1].toNumber());

  const games_: TGame[] = [];

  for (let token_id of myTokens) {
    const quantity = await (
      storage.ledger as unknown as BigMapAbstraction
    ).get<BigNumber>([address, token_id]);

    if (quantity !== undefined) {
      const tokenMetadata = await fetchTokenMetadata(storage, token_id);

      games_.push({
        metadata: tokenMetadata,
        token_id: token_id,
        quantity: quantity.toNumber(),
      });
    }
  }

  console.log(games_);

  return games_;
};

export default fetchGames;
