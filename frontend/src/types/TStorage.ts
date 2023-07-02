import { MichelsonMap } from "@taquito/taquito";
import { BigNumber } from "bignumber.js";

export type TOffer = {
  quantity: BigNumber;
  price: BigNumber;
};

export type TOfferMetadata = {
  decimals: number;
  description: string;
  name: string;
  symbol: string;
  thumbnailUri: string;
};

export type TOfferUI = TOffer &
  TOfferMetadata & {
    token_id: number;
    seller_address: TAddress;
  };

export type TBuyParameters = {
  seller: TAddress;
  amount: number;
  token_id: number;
  quantity: number;
};

export type TAddress = string;

export type TGame = {
  metadata: TOfferMetadata;
  token_id: number;
  quantity: number;
};

export type TStorage = {
  administrators: TAddress[];
  offers: MichelsonMap<[TAddress, BigNumber], TOffer>;
  owner_token_ids: [TAddress, BigNumber][];
  token_metadata: MichelsonMap<
    BigNumber,
    { token_id: BigNumber; token_info: MichelsonMap<string, string> }
  >;
  ledger: MichelsonMap<[TAddress, BigNumber], BigNumber>;
};
