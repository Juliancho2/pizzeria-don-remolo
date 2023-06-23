import { Hero } from '../components/organisms/Hero'
import { Header } from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import { Button } from '../components/atomic/Button'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Button>Julian</Button>
        <Footer />
      </main>
    </>
  )
}
