import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'

import { Link } from 'react-router-dom'
import MultiCarousel from '../shared/MultiCarousel'
import useRecommendHotels from './hooks/useRecommandHotels'
import HotelCard from './HotelCard'

export default function RecommandCarousel({ 
    recommandHotels 
} : {
    recommandHotels  : string[]
}) {

    const { data : hotels, isLoading } = useRecommendHotels({ hotelIds: recommandHotels  })

    if (hotels == null || isLoading) {
    return null
    }

    return (
        <div css = {constinerStyles}>
            <h4 css = {titleStyles}>추천 호텔</h4>
            <MultiCarousel>
            {
                hotels?.map((hotel)=>(
                    <Link to = {`/hotel/${hotel.id}`}>
                        <HotelCard hotel={hotel} isInfo = {false} />
                    </Link>
                ))
            }
            </MultiCarousel>
        </div>
    )
}

const constinerStyles = css`
    margin : auto;
    margin-top : 2rem;
    width : 90%;
`
const titleStyles = css`
    margin-bottom : 1.3rem;
    font-size : 1.2rem; 
    font-weight : bold;
`