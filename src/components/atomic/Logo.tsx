import { FC } from 'react'
import Image from 'next/image'

interface Props {
  widht: number
  height: number
}

export const Logo: FC<Props> = ({ widht = 77, height = 77 }) => {
  return (
    <div>
      <Image
        src="/assets/img/logo.png"
        width={widht}
        height={height}
        alt="Logo"
      />
    </div>
  )
}
