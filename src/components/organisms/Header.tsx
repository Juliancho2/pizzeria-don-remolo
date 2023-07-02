import { FC } from 'react'
import Link from 'next/link'

import { Navbar } from '../molecules/Navbar'
import { Logo } from '../atomic/Logo'

export const Header: FC = () => {
  return (
    <header className="w-full h-[77px]  bg-white sticky top-0 border-b z-20 ">
      <div className="flex items-center mx-auto w-full">
        <Link href="/">
          <Logo />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
