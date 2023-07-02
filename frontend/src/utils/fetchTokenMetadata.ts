import { TOfferMetadata, TStorage } from "@/types/TStorage";
import { hex2buf } from "@taquito/utils";
import { BigMapAbstraction, MichelsonMap } from "@taquito/taquito";
import { BigNumber } from "bignumber.js";

const fetchTokenMetadata = async (storage: TStorage, token_id: number) => {
  const info = await (
    storage.token_metadata as unknown as BigMapAbstraction
  ).get<{
    token_id: BigNumber;
    token_info: MichelsonMap<string, string>;
  }>(token_id);

  const decoder = new TextDecoder();
  const tokenMetadata: TOfferMetadata = {
    decimals: Number(info?.token_info.get("decimals") || "0"),
    description: decoder.decode(
      hex2buf(info?.token_info.get("description") || "")
    ),
    name: decoder.decode(hex2buf(info?.token_info.get("name") || "756e736574")),
    symbol: decoder.decode(
      hex2buf(info?.token_info.get("symbol") || "756e736574")
    ),
    thumbnailUri: decoder.decode(
      hex2buf(info?.token_info.get("thumbnailUri") || "756e736574")
    ),
  };

  return tokenMetadata;
};

export default fetchTokenMetadata;
