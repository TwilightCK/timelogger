import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const db = new PrismaClient()

export async function GET(_: Request, { params }: any) {
  const user = params.user.toLowerCase()
  const entries = await db.entry.findMany({
    where: { user },
    orderBy: { start: "desc" }
  })
  return NextResponse.json(entries)
}
