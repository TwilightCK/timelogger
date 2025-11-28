export const contractAddress = "0xda3638C5dfa481DB0851da92358bfDb648037911";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
  {
    "inputs": [],
    "name": "getLotSize",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "lotSizeAMG",
        "type": "uint64"
      },
      {
        "internalType": "uint8",
        "name": "assetDecimals",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;