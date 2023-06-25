import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { FC, useState } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
