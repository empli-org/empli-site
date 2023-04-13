import { NextResponse } from 'next/server'
import { db } from '~/lib/db'

export async function GET(request: Request, { params }) {
  const result = await db.job.findUnique({ where: { code: params.code } })
  return NextResponse.json(result)
}
