import { Hero } from '../components/organisms/Hero'
import { CarouselSection } from '../components/organisms/CarouselSection'

import { Layout } from './layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CarouselSection />
    </Layout>
  )
}
