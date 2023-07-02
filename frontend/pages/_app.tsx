import TezosProvider from "@/providers/TezosProvider";
import "@/styles/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TezosProvider>
      <Component {...pageProps} />
    </TezosProvider>
  );
}
