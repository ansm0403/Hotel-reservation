import { getRecommandHotels } from '@/remote/hotel'
import { css } from '@emotion/react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import HotelCard from '../hotel/HotelCard'
import MultiCarousel from '../shared/MultiCarousel'

export default function CarouselHotels() {

  const { data : hotels, isLoading } = useQuery({
    queryKey : ["hotels2"],
    queryFn : () => getRecommandHotels()
  })

  if(!hotels) return null;

  return (
    <div>
      <div css={titleStyles} >추천 호텔</div>
      <div css={containerStyles}>
        <MultiCarousel>
          {
            hotels?.map((hotel)=>(
              <Link to = {`/hotel/${hotel.id}`}>
                <HotelCard hotel={hotel} />
              </Link>
            ))
          }
        </MultiCarousel>    
      </div>
    </div>
  )
}

const containerStyles = css`
  padding : 1rem;
  background-color : white;
  margin : 15px 30px;
  min-width : 200px;
  border-radius : 3rem;
`
const titleStyles = css`
  color : white;
  font-size : 1.3rem;
  font-weight : bold;
  margin-left : 2rem;
  margin-top : 1rem;
`