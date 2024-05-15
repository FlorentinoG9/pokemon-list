import usePokemonId from '@/hooks/use-pokemon-id'
import { EvolutionChain, Species } from '@/utils/types'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function usePokemonEvolution() {
  const pokemon = usePokemonId()
  const params = useParams()
  const pokemonId = params.pokemonId as string

  const queryKey = ['pokemon-evolutions', pokemon.data?.species.id]

  const queryFn = async () => {
    const [err, species] = await fetchSpecies(pokemonId)
    if (err) throw err

    const [err2, evolutionChain] = await fetchEvolutionChain(species?.evolution_chain.url)

    if (err2) throw err2

    return evolutionChain as EvolutionChain
  }

  return useQuery<EvolutionChain>({
    queryKey,
    queryFn,
  })
}

async function fetchSpecies(pokemonId: string | undefined): Promise<[Error?, Species?]> {
  if (!pokemonId) return [new Error('No Pokemon ID'), undefined]

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
    const data = await response.json()
    return [undefined, data]
  } catch (error) {
    if (error instanceof Error) return [error, undefined]
  }

  return [new Error('Unknown error'), undefined]
}

async function fetchEvolutionChain(chainUrl: string | undefined): Promise<[Error?, EvolutionChain?]> {
  if (!chainUrl) return [new Error('No chain URL'), undefined]

  try {
    const response = await fetch(chainUrl)
    const data = await response.json()
    return [undefined, data]
  } catch (error) {
    if (error instanceof Error) return [error, undefined]
  }

  return [new Error('Unknown error'), undefined]
}
