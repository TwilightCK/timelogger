"use client"
import { useAccount, useContractRead, useContractWrite } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"
import { useState } from "react"

export const useTimelogger = () => {
  const { address } = useAccount()
  const [localRunning, setLocalRunning] = useState(false)

  const { data: running } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "isRunning",
    args: [address],
    watch: true,
  })

  const startWrite = useContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: "start",
  })

  const stopWrite = useContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: "stop",
  })

  const start = async () => {
    setLocalRunning(true)
    await startWrite.writeAsync()
  }

  const stop = async () => {
    setLocalRunning(false)
    await stopWrite.writeAsync({
      args: ["0x0000000000000000000000000000000000000000000000000000000000000000"],
    })
  }

  return {
    isRunning: Boolean(running || localRunning),
    start,
    stop,
    startLoading: startWrite.isLoading,
    stopLoading: stopWrite.isLoading,
  }
}
