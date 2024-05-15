import PokemonDetails from '@/components/pokemon-details'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Metadata } from 'next'

interface PokemonProps {
  params: { pokemonId: string }
}

export async function generateMetadata({ params }: PokemonProps): Promise<Metadata> {
  return {
    title: `Pokedex | ${params.pokemonId}`,
  }
}

export default async function Pokemon({ params: { pokemonId } }: Readonly<PokemonProps>) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      return res.json()
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['pokemon-evolution', pokemonId],
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      return res.json()
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className='flex size-full flex-col items-center justify-center gap-5'>
        <PokemonDetails />
      </section>
    </HydrationBoundary>
  )
}
