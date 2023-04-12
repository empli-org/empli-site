import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold">Welcome to Empli</h1>
      <div className="flex items-center gap-4">
        <Link href="/talents">Talent</Link>
        <Link href="/jobs">Jobs</Link>
      </div>
    </main>
  )
}
