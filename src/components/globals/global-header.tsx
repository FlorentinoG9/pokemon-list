import HeaderLogo from '@/components/globals/header-logo'
import SearchInput from '@/components/globals/search-input'
import React from 'react'

export default function GlobalHeader() {
  return (
    <header className='sticky top-0 z-10 flex size-full min-h-16 items-center border-b bg-muted/50 shadow-md backdrop-blur-md'>
      <div className='container flex items-center justify-between'>
        <HeaderLogo />

        <SearchInput />
      </div>
    </header>
  )
}
