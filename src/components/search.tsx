'use client'
import clsx from 'clsx'
import { useCombobox } from 'downshift'
import { useRouter } from 'next/navigation'
import { useId, useState } from 'react'
import { getJobListing } from '~/lib/jobs.server'

type ListingJob = Awaited<ReturnType<typeof getJobListing>>

export default function SearchBox() {
  const id = useId()
  const [jobs, setJobs] = useState<ListingJob>([])
  const [query, setQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<
    ListingJob[0] | null | undefined
  >(null)
  const router = useRouter()

  const cb = useCombobox<ListingJob[0]>({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedJob(selectedItem)
      // navigate to job
      router.push(`/jobs/${selectedItem?.code}`)
    },
    items: jobs,
    itemToString: item => (item ? item.title : ''),
    onInputValueChange: changes => {
      setSelectedJob(null)
      setQuery(changes.inputValue ?? '')
      // Fetch
      getJobListing({ query: changes.inputValue.toLowerCase() }).then(data =>
        setJobs(data),
      )
    },
  })

  const displayMenu = cb.isOpen && jobs.length > 0

  return (
    <div className="relative">
      <div
        {...cb.getMenuProps({ id: 'menu-lb', className: 'relative', role: '' })}
      >
        <input
          {...cb.getInputProps({
            id: 'input-search',
            value: query,
            className: clsx('w-full border border-gray-500 px-2 py-1 text-lg', {
              'rounded-t rounded-b-0': displayMenu,
              rounded: !displayMenu,
            }),
            'aria-label': 'input search',
            placeholder: 'Search your next job...',
            name: 'query',
            onKeyDown(e) {
              if (
                e.key === 'Enter' &&
                !selectedJob &&
                cb.highlightedIndex < 0
              ) {
                router.push(
                  `/jobs/search${query.length > 0 ? `?query=${query}` : ''}`,
                )
              }
            },
          })}
        />
      </div>
      <ul
        {...cb.getMenuProps({
          className: clsx(
            'absolute z-10 max-h-[180px] w-full overflow-y-scroll  rounded-b border border-t-0 border-gray-500 bg-white shadow-lg',
            { hidden: !displayMenu },
          ),
        })}
      >
        {displayMenu
          ? jobs.map((job, index) => (
              <li
                className={clsx('cursor-pointer px-2 py-1', {
                  'bg-[#1c2441] text-white': cb.highlightedIndex === index,
                })}
                key={job.id}
                {...cb.getItemProps({ item: job, index })}
              >
                {job.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}
