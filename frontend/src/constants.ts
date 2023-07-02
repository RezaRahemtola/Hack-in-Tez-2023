export const GHOSTNET_RPC_URL = process.env.NEXT_PUBLIC_GHOSTNET_RPC_URL ?? "";

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "";

export const PINATA_UPLOAD_URL =
  "https://api.pinata.cloud/pinning/pinJSONToIPFS";

export const PINATA_PUBLIC_GATEWAY_URL = (cid: string) =>
  `https://gateway.pinata.cloud/ipfs/${cid}`;
