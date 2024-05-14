import './globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import QueryProvider from '@/providers/query-provider'
import GlobalHeader from '@/components/globals/global-header'
import type { Metadata } from 'next'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'A simple pokedex app built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('flex min-h-screen flex-col bg-background font-sans antialiased', fontSans.variable)}>
        <QueryProvider>
          <GlobalHeader />
          <main className='container flex-1 p-5'>{children}</main>
        </QueryProvider>
      </body>
    </html>
  )
}
