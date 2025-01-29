import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import { Providers } from './providers'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Flux Balance',
  description: 'Flux Balance App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
