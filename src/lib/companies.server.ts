export async function getListingCompanies() {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/companies')
    if (!response.ok) throw new Error('Fail to fetch companies')
    return response.json()
  } catch {
    return []
  }
}
