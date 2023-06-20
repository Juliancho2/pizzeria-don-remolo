import '../styles/globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Pizzeria Don Remolo'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="light">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
