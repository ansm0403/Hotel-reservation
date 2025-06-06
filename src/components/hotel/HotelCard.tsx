import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import { lazy, Suspense } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PositionMarker = lazy(() => import('../icons/PositionMarker'))
const Star = lazy(() => import('../icons/Star'))
const YenIcon = lazy(() => import('../icons/YenIcon'))


export default function HotelCard({ hotel }: { hotel : HOTEL_2 }) {
  return (
    <Suspense fallback = {<></>}>
    <div css = {containerStyles}>
        <LazyLoadImage
              src = {hotel.mainImageUrl}
              alt = {"추천 호텔"}
              css = {imageStyles}
        />
        <div css = {contentsContainerStyles}>
            <div css = {titleStyles}>
                {hotel.name}
            </div>
            <div css = {ratingContainer}>
                <div style = {{display : "flex", gap : "0.3rem"}}>
                    <PositionMarker color = {"crimson"} />
                    {hotel.city}
                </div>
                <div style = {{display : "flex", gap : "0.3rem"}}>
                    <Star color = {"orange"}/>
                    {hotel.starRating}
                </div>
            </div>
            <div css = {priceContainerStyles}>
                <YenIcon size = {"1rem"}/>
                {hotel.price}
            </div>
        </div>
    </div>
    </Suspense>
  )
}

const containerStyles = css`
    margin : 10px;
    position : relative;
    left : 50%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    items-align : center;
`

const contentsContainerStyles = css`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    height : 100%;
`

const titleStyles = css`
    margin-top : 10px;
    font-weight : bold;
`

const ratingContainer = css`
    margin-top : 10px;
    color : gray;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    font-size : 0.9rem;
`
const priceContainerStyles = css`
    margin-top : 10px;
    display : flex;
    font-size : 0.9rem;
    color : gray;
    gap : 3px;
`

const imageStyles = css`
    height : 100px;
    @media (min-width: 420px){
        height : 150px;
    }
    transition : 1s all;
    object-fit: cover;
    border-radius : 20px;
`