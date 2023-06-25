import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

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
        <button className="btn" {...props}>
          <span className="loading loading-spinner"></span>
          loading
        </button>
      ) : (
        <button className={styles} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
