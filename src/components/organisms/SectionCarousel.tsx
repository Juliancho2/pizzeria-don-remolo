import React from 'react'

import Carousel from '../molecules/Carousel'

const SectionCarousel = () => {
  return (
    <section
      className=" py-10
    "
    >
      <div className="flex gap-5 items-center mx-auto p-5 w-4/5 justify-center border border-gray-200 ">
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
        <Carousel />
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
    </section>
  )
}

export default SectionCarousel
