import PokemonImage from '@/components/pokemon-image'
import PokemonStats from '@/components/pokemon-stats'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

interface PokemonCardProps {
  name: string
  url: string
  className?: string
}

export default function PokemonCard(props: Readonly<PokemonCardProps>) {
  return (
    <Card
      className={cn(
        'shadow-md transition-colors duration-300 group-hover:bg-muted group-hover:shadow-xl group-hover:ring-2',
        props.className
      )}
    >
      <CardHeader className='bg-muted'>
        <CardTitle className='text-center text-3xl capitalize'>{props.name}</CardTitle>
      </CardHeader>

      <CardContent className='h-fit'>
        <PokemonImage name={props.name} url={props.url} />
      </CardContent>

      <CardFooter>
        <PokemonStats />
      </CardFooter>
    </Card>
  )
}
