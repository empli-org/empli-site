import { NextResponse } from 'next/server'
import { db } from '~/lib/db'

export async function GET(request: Request) {
  const categories = await db.category.findMany()
  return NextResponse.json(categories)
}
