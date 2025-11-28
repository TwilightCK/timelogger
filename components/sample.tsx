// components/sample.tsx
"use client"

import { useLotSizeContract } from "@/hooks/useContract"
import { useAccount } from "wagmi"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const { data, state, refetch } = useLotSizeContract()

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">FAssets Settings</h2>
          <p className="text-muted-foreground">Please connect your wallet to read contract data.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">FAssets Settings Reader</h1>
          <p className="text-muted-foreground text-sm mt-1">Live data from the AssetManager contract</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Lot Size (AMG)</p>
            <p className="text-2xl font-semibold text-foreground">
              {state.isLoading ? "Loading..." : data.lotSizeAMG}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Asset Decimals</p>
            <p className="text-2xl font-semibold text-foreground">
              {state.isLoading ? "Loading..." : data.assetDecimals}
            </p>
          </div>
        </div>

        <button
          onClick={() => refetch()}
          disabled={state.isLoading}
          className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {state.isLoading ? "Refreshing..." : "Refresh Data"}
        </button>

        {state.error && (
          <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">
              Error: {state.error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation
