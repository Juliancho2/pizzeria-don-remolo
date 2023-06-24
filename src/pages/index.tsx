import { useStore } from '../store/store'
import { useSessionStore } from '../store/session'
import { Hero } from '../components/organisms/Hero'
import { Header } from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

export default function Home() {
  const user = useStore(useSessionStore, state => state.user)
  console.log(user)

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
