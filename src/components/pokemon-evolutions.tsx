'use client'

import PokemonImage from '@/components/pokemon-image'
import { Button } from '@/components/ui/button'
import usePokemonEvolution from '@/hooks/use-pokemon-evolution'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function PokemonEvolutions() {
  const evolutions = usePokemonEvolution()
  const params = useParams()

  if (evolutions.status === 'pending') return <div>Loading...</div>
  if (evolutions.status === 'error') return <div>Error: {evolutions.error.message}</div>

  const evolutionChain = evolutions.data?.chain

  function getEvolutionSpecies() {
    if (!evolutionChain) return []

    const species = [evolutionChain.species]

    let chain = evolutionChain.evolves_to

    while (chain.length > 0) {
      species.push(chain[0].species)
      chain = chain[0].evolves_to
    }

    return species
  }

  return (
    <section className='w-full max-w-xl p-2'>
      <div className='flex justify-evenly gap-2'>
        {getEvolutionSpecies().map((pokemon) => {
          const pokemonId = pokemon.url.split('/').at(-2)
          const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`

          const isSelected = params.pokemonId === pokemon.name

          return (
            <Button
              asChild
              key={pokemon.name}
              disabled={isSelected}
              variant={isSelected ? 'secondary' : 'outline'}
              className={`flex size-32 flex-col items-center gap-2 rounded border p-2 ${isSelected && 'pointer-events-none'}`}
            >
              <Link href={`/${pokemon.name}`}>
                <PokemonImage name={pokemon.name} url={url} />
                <p className='capitalize'>{pokemon.name}</p>
              </Link>
            </Button>
          )
        })}
      </div>
    </section>
  )
}
