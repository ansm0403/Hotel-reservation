import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import HotelCard from '../hotel/HotelCard'
import MultiCarousel from '../shared/MultiCarousel'
import PopularCard from './PopularCard'

export interface CarouselOption {
  queryKey : string[]
  queryFn : () => Promise<HOTEL_2[]>
  title : string
  mode : "recommand" | "popular",
}

export default function CarouselHotels({
  options
} : {
  options : CarouselOption
}) {
  const navigate = useNavigate();

  const { queryKey, queryFn, title, mode } = options

  const { data : hotels, isLoading } = useQuery({
    queryKey,
    queryFn
  })

  if( isLoading || !hotels ) return null;

  const handleButton = () => {
        navigate('/populars');
  }

  return (
    <div>
      <div css = {titleStyles}>
          <span className='title'>{title}</span>
          {
            mode === "popular"
            ? <button className='view' onClick={(e) => handleButton()}>view all</button>
            : null
          }
      </div>
      <div css={containerStyles}>
        <MultiCarousel mode={mode}>
          {
            hotels?.map((hotel)=>(
                mode === "recommand" 
                ? <HotelCard hotel={hotel} key = {hotel.id} />
                : <PopularCard hotel={hotel} key = {hotel.id} />
            ))
          }
        </MultiCarousel>    
      </div>
    </div>
  )
}

function Skeleton(){
  return (
    <div css = {containerStyles} style = {{height : "252px"}}>
      <Card isInfo = {false}></Card>
      <Card isInfo = {false}></Card>
      <Card isInfo = {false}></Card>
    </div>
  )
}

interface ContainerProps {
    isInfo : boolean
}

const Card = styled.div<ContainerProps>`
    margin : 10px;
    ${
        (props) => (
            props.isInfo 
            ? `
                height : 200px;
                @media (min-width : 420px){
                    height : 230px;
                }
            `
            : `
                height : 130px;
                @media (min-width : 420px){
                    height : 160px;
                }
            `
        )
    }
    position : relative;
    left : 50%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    items-align : center;
`
const skeletonStyles = css`
    height : 252px;
`

const containerStyles = css`
  width : 95%;
  height : 100%;
  margin : auto;
  background-color : white;
  min-width : 200px;
  // border-radius : 4rem;

  .react-multi-carousel-lis
      width : 100%;
      padding : 0px;
      overflow : hidden;

      .react-multi-carousel-track  {
        .p-3 {
          margin : 10px;
        }
      }
  }
`
const titleStyles = css`
    font-weight : bold;
    font-size : 1.3rem;
    margin : 20px 30px;
    margin-top : 40px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;

    .view {
        color : rgb(179,157,128);
    }
`