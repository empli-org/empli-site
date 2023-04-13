import { notFound } from 'next/navigation'
import { getJobById } from '~/lib/jobs.server'

export default async function JobPage({ params }: { params: { id: string } }) {
  const detail = await getJobById(params.id)
  if (!detail) return notFound()
  return (
    <div>
      <pre>{JSON.stringify(detail, null, 2)}</pre>
    </div>
  )
}
