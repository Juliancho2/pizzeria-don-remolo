import React from 'react'

import { ProductInterface, Categories } from '@/src/interface/productInterface'

import CardProduct from '../molecules/CardProduct'

interface Props {
  category: Categories[]
  products: ProductInterface[]
}

export const CategoryContainer = ({ category, products }: Props) => {
  return (
    <section className="min-h-[30vh] mt-10 px-4 bg-white pt-1 pb-20 ">
      {category.map(category => (
        <div
          id={category.label.toLowerCase()}
          key={category.label}
          className="mt-10 "
        >
          <h3 className="font-medium text-3xl mx-4 mb-8">{category.label}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-center gap-4 px-2 box-sizing w-full ">
            {products
              .filter(
                item =>
                  item.category.name.toLowerCase() ===
                  category.label.toLowerCase()
              )
              .map(product => (
                <CardProduct
                  actionMenu={false}
                  key={product.id}
                  dataProduct={product}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}
