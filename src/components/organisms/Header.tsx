import { FC } from 'react'
import Link from 'next/link'

import { Navbar } from '../molecules/Navbar'
import { Logo } from '../atomic/Logo'

export const Header: FC = () => {
  return (
    <header className="w-full h-[77px] fixed bg-transparent fixed top-0 z-20">
      <div className="flex items-center mx-auto w-full">
        <Link href="/">
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
