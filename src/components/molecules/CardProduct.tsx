import React from 'react'
import Image from 'next/image'

import { ProductInterface } from '@/src/interface/productInterface'

import { Button } from '../atomic/Button'

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
          <Button styles="btn btn-accent text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
