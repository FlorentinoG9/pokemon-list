'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import usePokemonId from '@/hooks/use-pokemon-id'
import { usePathname } from 'next/navigation'

export default function PokemonStats() {
  const pathname = usePathname()

  if (pathname.split('/')[1] === '') return null

  return (
    <Tabs defaultValue='stats' className='w-full'>
      <TabsList className='w-full *:w-full'>
        <TabsTrigger value='base'>Base</TabsTrigger>
        <TabsTrigger value='stats'>Stats</TabsTrigger>
        <TabsTrigger value='abilities'>Abilities</TabsTrigger>
      </TabsList>

      <Base />
      <Stats />
      <Abilities />
    </Tabs>
  )
}

function Base() {
  const pokemon = usePokemonId()

  const baseStats = [
    { name: 'Height', value: pokemon.data?.height },
    { name: 'Weight', value: pokemon.data?.weight },
    { name: 'Base Experience', value: pokemon.data?.base_experience },
    { name: 'Types', value: pokemon.data?.types.map((type) => type.type.name).join(', ') },
  ]

  return (
    <TabsContent value='base'>
      <ul className='rounded border'>
        {baseStats.map((stat) => (
          <li key={stat.name} className='flex justify-between p-2 odd:bg-slate-100'>
            <span>{stat.name}</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
    </TabsContent>
  )
}

function Stats() {
  const pokemon = usePokemonId()

  const totalBaseStats = pokemon.data?.stats.reduce((acc, stat) => acc + stat.base_stat, 0)

  return (
    <TabsContent value='stats'>
      <ul className='rounded border'>
        {pokemon.data?.stats.map((stat) => (
          <li key={stat.stat.name} className='flex justify-between p-2 odd:bg-slate-100'>
            <span className='capitalize'>{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
      <p className='mt-3 flex items-center justify-between gap-2 rounded border p-2'>
        Total: <strong className='rounded border px-2 py-1'>{totalBaseStats}</strong>
      </p>
    </TabsContent>
  )
}

function Abilities() {
  const pokemon = usePokemonId()

  return (
    <TabsContent value='abilities'>
      <ul className='rounded border'>
        {pokemon.data?.abilities.map((ability) => (
          <li key={ability.ability.name} className='p-2 capitalize odd:bg-slate-100'>
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </TabsContent>
  )
}
