import * as React from 'react'
import PokemonGrid from '@/components/pokemon-grid'
import { queryFnPokemonList, queryKeyPokemonList } from '@/hooks/use-pokemon-list'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: queryKeyPokemonList,
    queryFn: queryFnPokemonList,
  })

  return (
    <React.Suspense fallback={null}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonGrid />
      </HydrationBoundary>
    </React.Suspense>
  )
}
