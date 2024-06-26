'use client'

import PokemonImage from '@/components/pokemon-image'
import { Button } from '@/components/ui/button'
import usePokemonEvolution from '@/hooks/use-pokemon-evolution'
import { getImageUrl } from '@/utils/helpers'
import { type Species } from '@/utils/types'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function PokemonEvolutions() {
  const evolutions = usePokemonEvolution()
  const pathname = usePathname()

  const [, id] = pathname.split('/')

  if (id === '') return null

  if (evolutions.isPending) return <div>Loading...</div>

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
    <section className='w-full max-w-xl' data-testid='pokemon-evolutions'>
      <div className='flex justify-evenly gap-2'>
        {getEvolutionSpecies().map((pokemon) => (
          <PokemonEvolution key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </section>
  )
}

function PokemonEvolution({ pokemon }: { pokemon: Species }) {
  const params = useParams()
  const isSelected = params.pokemonId === pokemon.name
  const pokemonId = pokemon.url.split('/').at(-2) as string
  const url = getImageUrl(pokemonId)

  return (
    <Button
      asChild
      key={pokemon.name}
      disabled={isSelected}
      variant={isSelected ? 'secondary' : 'outline'}
      className={`flex size-32 flex-col items-center gap-2 rounded border p-2 ${isSelected && 'pointer-events-none'}`}
      data-testid='pokemon-evolution'
    >
      <Link href={`/${pokemon.name}`}>
        <PokemonImage name={pokemon.name} url={url} />
        <p className='capitalize'>{pokemon.name}</p>
      </Link>
    </Button>
  )
}
