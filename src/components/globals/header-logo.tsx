'use client'

import { searchQuery } from '@/hooks/use-search'
import Image from '@/utils/image'
import { useSetAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HeaderLogo() {
  const router = useRouter()
  const setSearch = useSetAtom(searchQuery)

  function handleResetSearch() {
    setSearch('')
    router.push('/')
  }

  return (
    <button type='button' onClick={() => handleResetSearch()}>
      <Image src='/pokedex.png' alt='Logo' width={110} height={50} priority />
    </button>
  )
}
