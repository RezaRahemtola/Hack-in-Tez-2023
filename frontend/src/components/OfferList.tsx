import { TBuyParameters, TOfferUI } from "@/types/TStorage";
import { BigNumber } from "bignumber.js";
import { useState } from "react";

const prettyPrice = (price: BigNumber, decimals: number) =>
  `${(price.toNumber() / 10 ** 6).toFixed(decimals)} XTZ`;

type OfferListProps = {
  offers: TOfferUI[];
  buy: (p: TBuyParameters) => Promise<void>;
};

const OfferList = ({ offers, buy }: OfferListProps): JSX.Element => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {offers.map((offer, idx) => (
        <div key={idx} className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{offer.name}</h2>

            <p className="mb-4">{offer.description}</p>

            <div className="card-actions justify-end">
              <div className="flex flex-col items-end me-3">
                <div className="font-bold text-xl">
                  {prettyPrice(offer.price, 2)}
                </div>

                <div className="font-light text-md">
                  {offer.quantity.toNumber()} available
                </div>
              </div>

              <button
                className={`btn btn-primary ${loading ? "loading" : ""}`}
                onClick={() => {
                  setLoading(true);
                  buy({
                    seller: offer.seller_address,
                    token_id: offer.token_id,
                    amount: offer.price.toNumber(),
                    quantity: 1,
                  })
                    .then(() => setLoading(false))
                    .catch(() => setLoading(false));
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OfferList;
