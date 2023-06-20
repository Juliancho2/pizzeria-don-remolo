import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Image src="/assets/img/logo.png" width={77} height={77} alt="Logo" />
    </div>
  )
}
