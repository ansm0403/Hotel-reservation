
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { Link } from 'react-router-dom'
import MultiCarousel from '../shared/MultiCarousel'
import useRecommendHotels from './hooks/useRecommandHotels'
import HotelCard from './HotelCard'

export default function RecommandCarousel({ 
    recommandHotels 
} : {
    recommandHotels  : string[]
}) {

    const { ref, inView } = useInView({
        triggerOnce : true,
    })
    const [ view, setView ] = useState(false);

    const { data : hotels, isLoading } = useRecommendHotels({ hotelIds: recommandHotels, inView : view })

    useEffect(()=>{
        setView(inView);
    }, [inView])

    if (hotels == null || isLoading) {
     return <div ref = {ref}></div>
    }

    return (
        <div css = {constinerStyles} >
            <h4 css = {titleStyles}>추천 호텔</h4>
            <MultiCarousel>
            {
                hotels?.map((hotel)=>(
                    <Link to = {`/hotel/${hotel.id}`} key = {hotel.id}>
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
    margin-bottom : 1.3rem;
    font-size : 1.2rem; 
    font-weight : bold;
`