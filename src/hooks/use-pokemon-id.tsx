import { PokemonDetails } from '@/utils/types'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function usePokemonId() {
  const params = useParams()
  const pokemonId = params.pokemonId as string
  const queryKey = ['pokemon', pokemonId]

  const queryFn = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    return res.json()
  }

  return useQuery<PokemonDetails>({
    queryKey,
    queryFn,
    enabled: !!pokemonId,
  })
}
