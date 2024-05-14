import { cn } from '@/lib/utils'
import NextImage, { type ImageProps } from 'next/image'

export default function Image({ className, ...props }: ImageProps) {
  return <NextImage className={cn('w-auto', className)} {...props} />
}
