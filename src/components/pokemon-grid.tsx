'use client'

import PokemonCard from '@/components/pokemon-card'
import usePokemonList from '@/hooks/use-pokemon-list'
import useSearch from '@/hooks/use-search'
import Link from 'next/link'

export default function PokemonGrid() {
  const list = usePokemonList()
  const filteredList = useSearch(list.data?.results || [])

  if (list.status === 'pending') return <div>Loading...</div>
  if (list.status === 'error') return <div>Error...</div>
  if (filteredList.length === 0) return <div>Empty Pokemon List</div>

  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(200px,300px))] place-content-center gap-5'>
      {filteredList.map((pokemon) => {
        const pokemonId = pokemon.url.split('/').at(-2) as string
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`

        return (
          <li key={pokemon.name}>
            <Link href={`/${pokemon.name}`} className='group'>
              <PokemonCard name={pokemon.name} url={imageUrl} number={pokemonId}/>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
