async function fetchCategories() {
  const response = await fetch('http://localhost:3000/api/categories')
  if (!response.ok) throw new Error('Fail to fetch categories')

  return response.json()
}

export default async function JobsPage() {
  const categories = await fetchCategories()

  function handleSubmit(e) {
    e.preventDefault()
    // TODO go to search
  }
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
