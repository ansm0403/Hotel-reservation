import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export default function MultiCarousel({ children } : {children : React.ReactNode}) {
  return (
    <Carousel 
      removeArrowOnDeviceType = {["desktop", "tablet", "mobile"]}
      infinite 
      autoPlay 
      responsive={responsive} 
      itemClass="m-2"
    >
        {children}
    </Carousel>
  )
}
