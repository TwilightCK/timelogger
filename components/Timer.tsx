"use client"
import { useTimelogger } from "@/hooks/useTimeLogger"

export default function Timer() {
  const { isRunning, start, stop, startLoading, stopLoading } = useTimelogger()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">TimeLogger</h1>

      {isRunning ? (
        <button
          onClick={stop}
          className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg"
        >
          {stopLoading ? "Stopping..." : "Stop Timer"}
        </button>
      ) : (
        <button
          onClick={start}
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          {startLoading ? "Starting..." : "Start Timer"}
        </button>
      )}
    </div>
  )
}
