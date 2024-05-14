import PokemonDetails from '@/components/pokemon-details'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

interface PokemonProps {
  params: { pokemonId: string }
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
