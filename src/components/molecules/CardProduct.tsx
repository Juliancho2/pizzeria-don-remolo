import React from 'react'
import Image from 'next/image'

import { ProductInterface } from '@/src/interface/productInterface'

import ButtonCard from '../atomic/ButtonCard'

interface Props {
  dataProduct: ProductInterface
}

const CardProduct = ({ dataProduct }: Props) => {
  return (
    <div className="card mx-2 min-w-[200px] sm:min-w-[260px]  w-96 bg-base-100 shadow-xl">
      <figure className=" w-[200px] sm:w-[250px] h-[200px]">
        <Image
          width={300}
          height={300}
          src={dataProduct.imgURL}
          alt={dataProduct.name}
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dataProduct.name}</h2>
        <p>${dataProduct.price}</p>
        <div className="card-actions">
          <ButtonCard />
        </div>
      </div>
    </div>
  )
}

export default CardProduct
