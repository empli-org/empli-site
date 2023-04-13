import { NextResponse } from 'next/server'
import { db } from '~/lib/db'

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams
  const query = searchParams.get('query')
  const limit = searchParams.get('limit')

  const result = await db.job.findMany({
    ...(query && {
      where: {
        title: { contains: query },
      },
    }),
    select: {
      id: true,
      code: true,
      title: true,
      description: true,
      company: {
        select: {
          name: true,
        },
      },
    },
    ...(!isNaN(Number(limit)) && { take: Number(limit) }),
  })

  return NextResponse.json(result)
}
