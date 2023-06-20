import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>
}
