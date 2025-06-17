import { css } from '@emotion/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function MultiCarousel({ 
  isAuto = false,
  mode = "recommand",
  children 
} : {
  isAuto? : boolean
  mode? : "recommand" | "popular"
  children : React.ReactNode
}) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mode === "recommand" ? 1.2 : 2.0
    }
  };

  return (
    <div>
      <Carousel 
        css={carouselStyle}
        removeArrowOnDeviceType = {["desktop", "tablet", "mobile"]}
        infinite = { mode === "popular" ? true : false}
        // centerMode = { mode === "popular" ? true : false}
        autoPlay = {isAuto}
        responsive={responsive} 
        itemClass="p-3"
      >
          {children}
      </Carousel>
    </div>
  )
}


const carouselStyle = css`


`