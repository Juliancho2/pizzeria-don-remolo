import { FC } from 'react'
import Link from 'next/link'

import { Navbar } from '../molecules/Navbar'
import { Logo } from '../atomic/Logo'

export const Header: FC = () => {
  return (
    <header className="w-full h-[77px] fixed bg-transparent">
      <div className="flex items-center mx-auto w-[1200px]">
        <Link href="/">
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
