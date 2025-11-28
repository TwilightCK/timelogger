import { createPublicClient, http, watchContractEvent } from "viem"
import { PrismaClient } from "@prisma/client"
import { contractABI, contractAddress } from "../lib/contract"

const client = createPublicClient({
  transport: http(process.env.RPC_URL!)
})

const prisma = new PrismaClient()

async function main() {
  console.log("Indexer running...")

  watchContractEvent({
    address: contractAddress,
    abi: contractABI,
    eventName: "LogStopped",
    onLogs: async (logs) => {
      for (const log of logs) {
        const args = log.args as any
        await prisma.entry.create({
          data: {
            entryId: args.entryId,
            user: args.user.toLowerCase(),
            start: new Date(Number(args.start) * 1000),
            end: new Date(Number(args.end) * 1000),
            duration: Number(args.duration),
            noteHash: args.noteHash,
            txHash: log.transactionHash
          }
        })
      }
    }
  })
}

main()
