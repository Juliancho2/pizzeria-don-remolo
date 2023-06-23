'use client'
import React, { useEffect, useState } from 'react'

import { ProductInterface } from '@/src/interface/productInterface'

import CardProduct from './CardProduct'

const Carousel = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res.raw)
      })
  }, [])

  const scrollLeft = () => {
    const carouselElement = document.getElementById('carousel')

    if (carouselElement) carouselElement.scrollLeft -= 200
  }

  const scrollRight: () => void = () => {
    const carouselElement = document.getElementById('carousel')

    if (carouselElement) carouselElement.scrollLeft += 200
  }

  return (
    <div className="w-full overflow-hidden flex items-center gap-5 ">
      <div onClick={scrollLeft}>
        <svg
          width="19"
          height="33"
          viewBox="0 0 19 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 LimitedOffersSection__StyledForwardButton-sc-124eze5-2 LimitedOffersSection__StyledBackButton-sc-124eze5-3 CyWtq bvrcCC"
        >
          <path
            d="M0.999998 32L18 15.7397L1 0.999999"
            stroke="#686767"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <div
        id="carousel"
        className="carousel flex overflow-x-scroll rounded-box py-5 w-full"
      >
        {products &&
          products
            .filter((item: ProductInterface) => item.category.name === 'pizza')
            .slice(0, 5)
            .map((item: ProductInterface) => (
              <CardProduct dataProduct={item} key={item.id} />
            ))}
      </div>

      <div onClick={scrollRight}>
        <svg
          width="19"
          height="33"
          viewBox="0 0 19 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="LimitedOffersSection__StyledForwardButton-sc-124eze5-2 LimitedOffersSection__StyledBackButton-sc-124eze5-3 CyWtq bvrcCC"
        >
          <path
            d="M0.999998 32L18 15.7397L1 0.999999"
            stroke="#686767"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Carousel
