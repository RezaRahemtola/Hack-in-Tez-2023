import { useTezosContext } from "@/contexts/TezosContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const { connectWallet, disconnectWallet, address, wallet } =
    useTezosContext();
  const router = useRouter();

  return (
    <header className="flex p-4 items-center mb-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl me-2">
            Ameno
          </Link>

          <small className="text-warning">proof of concept</small>
        </div>

        <div className="navbar-center">
          <ul className="flex px-1">
            <li className="mx-2">
              <Link
                className={`${
                  router.pathname.includes("/marketplace") ? "bg-white" : ""
                } p-2 rounded-md bg-opacity-20`}
                href="/marketplace"
              >
                Marketplace
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  router.pathname.includes("/library") ? "bg-white" : ""
                } p-2 rounded-md bg-opacity-20`}
                href="/library"
              >
                My Library
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {address ? (
            <details className="dropdown">
              <summary className="btn btn-sm btn-ghost lowercase">
                {[...address].filter((_, i) => i < 20).join("")}...
              </summary>
              <ul className="mt-2 p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box">
                <li>
                  <a className="link p-2 link-error" onClick={disconnectWallet}>
                    disconnect
                  </a>
                </li>
              </ul>
            </details>
          ) : (
            <button className="btn btn-sm btn-primary" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
