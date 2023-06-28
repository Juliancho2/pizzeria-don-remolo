import React from 'react'

import Carousel from '../molecules/Carousel'

const SectionCarousel = () => {
  return (
    <section className="min-h-[50vh] py-20  flex items-center w-full">
      <div className="flex overflow-hidden sm:w-[90%] mx-auto max-w-[1200px] gap-5 flex-col   px-1 py-5 w-full justify-center">
        <h2 className="font-bold text-2xl sm:text-3xl px-2">
          ESCOGE TU MASA FAVORITA
        </h2>
        <small className="text-gray-400 font-medium text-lg px-2">
          5 items
        </small>
        <hr />
        <Carousel />
      </div>
    </section>
  )
}

export default SectionCarousel
