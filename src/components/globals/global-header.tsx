import HeaderLogo from '@/components/globals/header-logo'
import SearchInput from '@/components/globals/search-input'
import React from 'react'

export default function GlobalHeader() {
  return (
    <header className='sticky top-0 z-20 flex size-full min-h-16 items-center border-b bg-muted/50 py-3 shadow-md backdrop-blur-md'>
      <div className='container flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between'>
        <HeaderLogo />

        <SearchInput />
      </div>
    </header>
  )
}
