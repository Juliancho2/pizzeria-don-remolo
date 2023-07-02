import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Categories } from '@/src/interface/productInterface'

interface Props {
  categories: Categories[]
}

export const NavBarCategories = ({ categories }: Props) => {
  return (
    <div className="w-full  border-b mx-auto  rounded-sm bg-white sticky top-[77px] z-10 w-full flex justify-center h-20">
      <nav className="w-4/5 carousel h-full">
        <ul className="flex w-full h-full justify-between items-center">
          {categories.map(item => (
            <Link key={item.label} href={`#${item.label.toLowerCase()}`}>
              <li className="font-medium text-xl mx-4 flex flex-col items-center">
                <p className="text-2xl sm:text-3xl">{item.label}</p>
                <Image width={40} height={40} alt="" src={item.icon}></Image>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}
