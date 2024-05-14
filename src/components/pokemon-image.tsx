import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import Image from '@/utils/image'
import React from 'react'

export default function PokemonImage({ name, url, className }: { name: string; url: string; className?: string }) {
  return (
    <AspectRatio ratio={2 / 1.5} className={cn('mx-auto', className)}>
      <Image
        fill
        src={url}
        alt={name}
        sizes='(max-width: 300px) 100vw, 33vw'
        className='pointer-events-none mx-auto w-full select-none object-contain object-center'
      />
    </AspectRatio>
  )
}
