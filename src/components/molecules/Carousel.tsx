import React from 'react'

import CarouselItem from '../atomic/CarouselItem'

const Carousel = () => {
  const array = [1, 2, 3]
  return (
    <div className="carousel overflow-x-scroll bg-red-200 rounded-box sm:w-1/2">
      {array.map((item, index) => (
        <CarouselItem key={index} />
      ))}
    </div>
  )
}

export default Carousel
