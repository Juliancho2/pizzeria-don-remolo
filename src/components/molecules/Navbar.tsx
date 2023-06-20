import { FC } from 'react'
import Link from 'next/link'

import { Logo } from '../atomic/Logo'

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
    <div className="navbar">
      <nav>
        <ul className="menu menu-horizontal px-1">
          {routes.map(route => (
            <li key={route.url}>
              <Link href={route.url} className="link-hover">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
