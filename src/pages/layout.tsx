import { Header } from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
