export async function getJobListing({
  query,
  limit,
}: {
  query?: string
  limit?: number
}) {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/jobs?query=${query}&limit=${limit}`,
    )
    if (!response.ok) throw new Error('Fail to fetch jobs')
    return response.json()
  } catch {
    return []
  }
}

export async function getJobById(id: string) {
  try {
    const response = await fetch(`http://127.0.0.1:3000/api/jobs/${id}`)
    if (!response.ok) throw new Error('Fail to fetch job by id')
    return response.json()
  } catch {
    return null
  }
}
