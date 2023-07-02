import { createContext, useContext } from "react";
import TWeb3 from "../types/TWeb3";

const TezosContext = createContext<TWeb3>({} as TWeb3);

export const useTezosContext = () => useContext(TezosContext);

export default TezosContext;
