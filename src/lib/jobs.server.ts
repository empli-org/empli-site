export async function fetchCategories() {
  try {
    const response = await fetch('http://localhost:3000/api/categories')

    if (!response.ok) throw new Error('Fail to fetch categories')

    return response.json()
  } catch {
    return []
  }
}
