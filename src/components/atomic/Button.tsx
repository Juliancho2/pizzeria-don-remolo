import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  styles: string
}

export const Button: FC<Props> = ({ children, styles }) => {
  return <button className={styles}>{children}</button>
}
