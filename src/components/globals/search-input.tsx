'use client'

import * as React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { searchQuery } from '@/hooks/use-search'
import { useAtom } from 'jotai'
import { Search as SearchIcon } from 'lucide-react'

function Search() {
  const [search, setSearch] = useAtom(searchQuery)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  React.useEffect(() => {
    const q = searchParams.get('q')
    if (q) setSearch(q)
  }, [searchParams, setSearch])

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams)
    if (e.target.value) {
      params.set('q', e.target.value)
      setSearch(e.target.value)
    } else {
      params.delete('q')
      setSearch('')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  if (pathname.split('/')[1] !== '') return null

  return (
    <div className='relative w-full max-w-sm flex-1'>
      <SearchIcon className='absolute left-2.5 top-3 size-4 text-muted-foreground' />
      <Input
        type='search'
        placeholder='pikachu, charizard, mew, ...'
        className='w-full rounded bg-background pl-8'
        autoComplete='off'
        value={search}
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  )
}

export default function SearchInput() {
  return (
    <React.Suspense>
      <Search />
    </React.Suspense>
  )
}
