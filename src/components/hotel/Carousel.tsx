import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {  useState } from 'react';
import { HOTEL_2 } from '@/models/hotel';
import LikeIcon from '../icons/LikeIcon';

function Carousel({ 
  images,
  data
}: { 
  images: string[]
  data : HOTEL_2
}) {

  const [ index, setIndex ] = useState(1);

  return (
    <div css = {containerStyles}>
      <Swiper css={swiperStyles} watchSlidesProgress >
        {images.map((imageUrl, idx) => (
          <SwiperSlide key={imageUrl}>
            {
              ({isActive}) => {
                isActive && setIndex(idx+1);
                return (
                  <LazyLoadImage
                    src={imageUrl}
                    alt={`${idx + 1}번째 호텔의 이미지`}
                    css={imageStyles}
                    height = {300}
                  />
                )
              }
            }
          </SwiperSlide>
        ))}
      </Swiper>
      <div css = {countStyles}>
        <span>
          { `${index} / ${images.length}` }
        </span>
      </div>
      <LikeIcon hotel={data}/>
    </div>
  )
}
const containerStyles = css`
  position : relative
`

const swiperStyles = css`
  padding: 0 24px;
  height: 400px;
  width : 100%;
`

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform : translateX(0px);
`

const countStyles = css`
  position : absolute;
  padding : 10px 20px;
  background : rgba(0, 0, 0, 50%);
  color : white;
  z-index : 30;
  font-size : 1.2rem;
  border-radius : 15px;
  top : 75%;
  @media (min-width : 950px){
    left : 90%;
  }
  @media (min-width : 500px){
    left : 80%;
  }
  left : 75%;
`



export default Carousel