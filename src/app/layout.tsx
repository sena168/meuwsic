import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meuwsic Player',
  description: 'A modern music player built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}