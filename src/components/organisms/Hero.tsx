import Image from 'next/image'

import { Button } from '../atomic/Button'

export const Hero = () => {
  return (
    <div className="min-h-[800px] bg-hero-banner bg-cover bg-no-repeat pt-10">
      <div className="text-center lg:text-left flex flex-col sm:flex-row justify-between max-w-[1200px] mx-auto items-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-extrabold text-[#FA6241]">
            Pizzeria Don Remolo
          </h1>
          <p className="mb-5 px-2  text-xl font-semibold text-[#5d5d5d]">
            El sabor que te hace girar la cabeza: <br></br> ¡Bienvenidos a Don
            Remolo, la mejor pizzería de la ciudad!
          </p>
          <Button styles="btn btn-neutral">Menu</Button>
        </div>
        <div>
          <Image
            className="filter drop-shadow-2xl"
            src="/assets/icons/deliveryIcon.png"
            width={500}
            height={500}
            alt="Icon Delivery"
          />
        </div>
      </div>
    </div>
  )
}
