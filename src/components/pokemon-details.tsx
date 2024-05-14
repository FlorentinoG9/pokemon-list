'use client'

import PokemonCard from '@/components/pokemon-card'
import usePokemonId from '@/hooks/use-pokemon-id'
import React from 'react'

export default function PokemonDetails() {
  const pokemon = usePokemonId()

  if (pokemon.status === 'pending') return <div>Loading...</div>
  if (pokemon.status === 'error') return <div>Error: {pokemon.error.message}</div>

  return (
    <PokemonCard
      name={pokemon.data?.name}
      url={pokemon.data?.sprites.other?.['official-artwork'].front_default as string}
      number={pokemon.data?.id}
      className='w-full max-w-xl '
    />
  )
}
