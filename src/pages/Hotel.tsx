import { useParams } from 'react-router-dom'

import Top from '@shared/Top'
import useHotel from '@components/hotel/hooks/useHotel'
// import RecommendHotels from '@/components/hotel/RecommandHotels'
// import ActionButtons from '@/components/hotel/ActionButtons'
import Review from '@/components/hotel/Review'
import SEO from '@/components/shared/SEO'
import { css } from '@emotion/react'
import { lazy, useEffect } from 'react'
// import Contents from '@/components/hotel/Contents'
import RecommandCarousel from '@/components/hotel/RecommandCarousel'
import InfoIcons from '@/components/hotel/InfoIcons'
import GoBackIcon from '@/components/icons/GoBackIcon'
import { useSetRecoilState } from 'recoil'
import { navbarAtom } from '@/store/atom/navbar'

const Carousel = lazy(()=>import("@components/hotel/Carousel"))
const Rooms = lazy(()=>import('@/components/hotel/Rooms'))
const Map = lazy(()=>import('@/components/hotel/Map'))


function HotelPage() {

  const setNavbarState = useSetRecoilState(navbarAtom);

  useEffect(()=>{
    setNavbarState(false);

    return () => setNavbarState(true);
  })

  const { id } = useParams() as { id: string }

  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  const { name, comment, images, contents, location, recommendHotels, mainImageUrl, starRating, city } = data

  const handleBack = () => {
    window.history.back();
  }

  const hotelImage = [mainImageUrl, ...images]

  return (
    <div css = {containerStyles}>
      <SEO title={name} description = {comment} image = {images[0]} />
      <GoBackIcon 
        size = "30px" 
        className='back'
        onClick={handleBack}
      /> 
      <Carousel images={hotelImage} data = {data}/>
      <div css = {contentsStyles}>
        <Top title={name} subTitle={comment} data = {data}/>
        <InfoIcons hotel = {data}/>
        {/* <Rooms hotelId={id} images = {images} /> */}
        <Map location={location}/>
        {/* <Contents contents={contents} images = {images} /> */}
        <RecommandCarousel recommandHotels={recommendHotels} />
        {/* <RecommendHotels recommendHotels={recommendHotels}/> */}
        <Review hotelId={id}/>
      </div>
    </div>
  )
}

const containerStyles = css`
  position : relative;

  .back {
    position : fixed;
    top : 20px;
    left : 20px;
    z-index : 90;
    color : white;
    padding : 7px;
    border-radius : 100%;
    background : rgba(0, 0, 0, 30%);
  }
`

const contentsStyles = css`
  border-radius : 0;
  position : relative;
  top : -40px;
  z-index : 80;
  border-radius : 40px 40px 0 0;
  background : white;
`
const backIconStyles = css`
  display : flex;
  justify-content : center;
  items-align : center;
  position : absolute;
  padding : 20px;
  background : gray;
  top : 0px;
  left : 0px;
  z-index : 30;
`


export default HotelPage

