import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { Spinner } from './Spinner'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  styles: string
  isLoading?: boolean
}

export const Button: FC<Props> = ({
  children,
  styles,
  isLoading = false,
  ...props
}) => {
  return (
    <>
      {isLoading ? (
        <button className={styles} {...props}>
          <Spinner />
        </button>
      ) : (
        <button className={styles} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
