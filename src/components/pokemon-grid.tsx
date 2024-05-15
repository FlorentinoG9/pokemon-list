'use client'

import PokemonCard from '@/components/pokemon-card'
import usePokemonList from '@/hooks/use-pokemon-list'
import useSearch from '@/hooks/use-search'
import { getImageUrl } from '@/utils/helpers'
import Link from 'next/link'

export default function PokemonGrid() {
  const list = usePokemonList()
  const filteredList = useSearch(list.data?.results || [])

  if (list.status === 'pending') return <div>Loading...</div>
  if (list.status === 'error') return <div>Error...</div>
  if (filteredList.length === 0) return <div>Empty Pokemon List</div>

  return (
    <ul className='grid grid-cols-2 place-content-around gap-5 sm:grid-cols-3 xl:grid-cols-4' data-testid='pokemon-list'>
      {filteredList.map((pokemon) => {
        const pokemonId = pokemon.url.split('/').at(-2) as string
        const url = getImageUrl(pokemonId)

        return (
          <li key={pokemon.name} >
            <Link href={`/${pokemon.name}`} className='group'>
              <PokemonCard name={pokemon.name} url={url} number={pokemonId} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
