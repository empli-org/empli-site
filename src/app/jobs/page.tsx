import { fetchCategories } from '~/lib/jobs.server'

export default async function JobsPage() {
  const categories = await fetchCategories()

  return (
    <div className="flex flex-col items-center p-12">
      <h1>Jobs</h1>

      <form>
        <input
          type="search"
          name="query"
          placeholder="Search jobs by keyword"
          className="w-full"
        />
      </form>

      <h1>Categories</h1>
      {JSON.stringify(categories)}
    </div>
  )
}
