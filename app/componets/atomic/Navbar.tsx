import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Route {
  url: string
  label: string
}

const routes: Route[] = [
  {
    url: '#',
    label: 'Mis Ordenes'
  },
  {
    url: '/',
    label: 'Login'
  }
]

export const Navbar: FC = () => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <Link href="/">
          <Image src="/assets/img/logo.png" width={77} height={77} alt="Logo" />
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {routes.map(route => (
            <li key={route.url}>
              <Link href={route.url} className="link-hover text-white">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
