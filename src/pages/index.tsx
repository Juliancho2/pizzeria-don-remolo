import { Hero } from '../components/organisms/Hero'
import { Header } from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-0">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
