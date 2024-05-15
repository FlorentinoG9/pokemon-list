import PokemonEvolutions from '@/components/pokemon-evolutions'
import PokemonImage from '@/components/pokemon-image'
import PokemonStats from '@/components/pokemon-stats'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

interface PokemonCardProps {
  name: string
  url: string
  number: number | string | undefined
  className?: string
}

export default function PokemonCard(props: Readonly<PokemonCardProps>) {
  return (
    <Card
      data-testid='pokemon-card'
      className={cn(
        'shadow-md transition-colors duration-300 group-hover:bg-muted group-hover:shadow-xl group-hover:ring-2',
        props.className
      )}
    >
      <CardHeader className='flex flex-row items-center justify-between gap-3 bg-muted'>
        <CardTitle className='truncate text-center text-lg capitalize md:text-3xl' data-testid='pokemon-name'>{props.name}</CardTitle>
        <PokemonNumber number={props?.number || 0} />
      </CardHeader>

      <CardContent>
        <PokemonImage name={props.name} url={props.url} className='mt-5' />
        <PokemonEvolutions />
      </CardContent>

      <CardFooter>
        <PokemonStats />
      </CardFooter>
    </Card>
  )
}

function PokemonNumber({ number }: { number: number | string }) {
  const pokemonNumber = number.toString().padStart(3, '0')

  return (
    <CardDescription>
      <span className='font-mono text-base tabular-nums md:text-2xl'>#{pokemonNumber}</span>
    </CardDescription>
  )
}
