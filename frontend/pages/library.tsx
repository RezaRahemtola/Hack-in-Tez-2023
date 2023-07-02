import { useTezosContext } from "@/contexts/TezosContext";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { TGame } from "@/types/TStorage";
import Alert from "@/components/Alert";
import LibraryList from "@/components/LibraryList";
import fetchGames from "@/utils/fetchGames";

export default function Marketplace() {
  const [error, setError] = useState("");
  const [games, setGames] = useState<TGame[]>([]);
  const { tezos, address } = useTezosContext();

  useEffect(() => {
    if (!address) return;

    try {
      fetchGames(tezos, address).then((games_) => setGames(games_));
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Unknown error");
      }
    }
  }, [address]);

  return (
    <>
      <Header />

      <main className="flex flex-wrap p-4 justify-center mt-8">
        {error && <Alert message={error} variant="error" />}

        {address ? (
          <LibraryList games={games} />
        ) : (
          <Alert message="Please connect your wallet" variant="info" />
        )}
      </main>
    </>
  );
}
