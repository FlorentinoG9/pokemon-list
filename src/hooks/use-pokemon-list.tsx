import { PokemonList } from '@/utils/types'
import { useQuery } from '@tanstack/react-query'

export const queryKeyPokemonList = ['pokemon-list']

export const queryFnPokemonList = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
  const data = await response.json()
  return data
}

export default function usePokemonList() {
  return useQuery<PokemonList>({
    queryKey: queryKeyPokemonList,
    queryFn: queryFnPokemonList,
  })
}
