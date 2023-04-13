import Link from 'next/link'
import SearchBox from '~/components/search'
import { getListingCompanies } from '~/lib/companies.server'
import { getJobListing } from '~/lib/jobs.server'

export default async function JobsPage() {
  const companies = await getListingCompanies()
  const latestJobs = await getJobListing({ query: '', limit: 3 })

  return (
    <div className="flex flex-col items-center py-12">
      <div>
        <h1>Jobs</h1>

        <SearchBox />
      </div>

      <section className="py-6">
        <div className="mb-4 flex items-center gap-4">
          <h1 className="text-lg font-bold">Latest jobs published</h1>
          <Link className="underline" href="/jobs/search">
            See all
          </Link>
        </div>

        <ul>
          {latestJobs.map(job => (
            <li key={job.id}>
              <Link href={`/jobs/${job.code}`}>
                <h1 className="font-bold underline">{job.title}</h1>
              </Link>
              <h2>{job.description}</h2>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-6">
        <h1 className="mb-4 text-lg font-bold">Companies</h1>

        <ul>
          {companies.map(c => (
            <li key={c.id}>
              <h1>{c.name}</h1>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
