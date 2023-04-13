import { NextResponse } from 'next/server'
import { db } from '~/lib/db'

export async function GET(request: Request) {
  const result = await db.company.findMany()

  return NextResponse.json(result)
}
