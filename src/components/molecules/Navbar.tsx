import { FC } from 'react'
import Link from 'next/link'

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
    label: 'Contactanos'
  }
]

export const Navbar: FC = () => {
  return (
    <div className="navbar flex justify-end ">
      <nav className="hidden sm:block">
        <ul className="menu menu-horizontal px-1 ">
          {routes.map(route => (
            <li key={route.url}>
              <Link
                href={route.url}
                className="link-hover decoration-0 text-white"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* menu mobile */}
      <nav className="navbar flex justify-end sm:hidden">
        <div className="flex-none ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link href="" className="w-full">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routes
                .filter(item => item.url !== '#')
                .map((item, index) => (
                  <li key={index}>
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
