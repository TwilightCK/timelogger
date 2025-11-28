// hooks/useContract.ts
"use client"

import { useReadContract } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface LotSizeData {
  lotSizeAMG: string
  assetDecimals: number
}

export interface ContractState {
  isLoading: boolean
  error: Error | null
}

export const useLotSizeContract = () => {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getLotSize",
  })

  let parsed: LotSizeData = {
    lotSizeAMG: "0",
    assetDecimals: 0
  }

  if (data) {
    const [lotSize, decimals] = data as readonly [bigint, number]
    parsed = {
      lotSizeAMG: lotSize.toString(),
      assetDecimals: decimals
    }
  }

  const state: ContractState = {
    isLoading,
    error: error ?? null,
  }

  return {
    data: parsed,
    state,
    refetch,
  }
}
