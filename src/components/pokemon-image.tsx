import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from '@/utils/image'
import React from 'react'

export default function PokemonImage({ name, url }: { name: string; url: string }) {
  return (
    <AspectRatio ratio={2 / 1.5}>
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
