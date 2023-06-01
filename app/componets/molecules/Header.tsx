import { FC } from 'react'

import { Navbar } from '../atomic/Navbar'

export const Header: FC = () => {
  return (
    <header className="w-full h-[77px] fixed bg-transparent">
      <Navbar />
    </header>
  )
}
