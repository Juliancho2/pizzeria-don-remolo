import { FC } from 'react'
import { Lato } from 'next/font/google'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Pizzeria Don Remolo'
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
