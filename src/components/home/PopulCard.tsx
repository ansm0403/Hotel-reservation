import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import { lazy, Suspense } from "react";
import { Link } from 'react-router-dom';

const PositionMarker = lazy(() => import('../icons/PositionMarker'))
const Star = lazy(() => import('../icons/Star'))
const YenIcon = lazy(() => import('../icons/YenIcon'))

 function PopulCard({
    hotel
} : { 
    hotel : HOTEL_2 
} ) {
  return (
    <Suspense fallback = {<></>}>
    <Link to = {`/hotel/${hotel.id}`}>
        <div css = {containerStyles}>
            <img src = {hotel.mainImageUrl} css = {imgStyles} />
            <div css = {contentsContainerStyles}>
                <div css = {titleStyles}>
                    <div>
                        {hotel.name}
                    </div>
                    <div css = {priceContainerStyles}>
                        <YenIcon size = {"1rem"}/>
                        {hotel.price}
                    </div>
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
                <div css = {ratingContainer}>
                    <div>편의시설 / {hotel.facilities}</div>
                    <div>청결 / {hotel.cleanliness}</div>
                </div>
            </div>
        </div>
    </Link>
    </Suspense>
  )
}

const containerStyles = css`
    padding : 1rem;
    background-color : white;
    margin : 30px;
    border-radius : 20px;
    text-align : center;
    cursor : pointer;
`

const imgStyles = css`
    width : 100%;
    height : 150px;
    border-radius : 15px;
`

const contentsContainerStyles = css`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    height : 100%;
`

const titleStyles = css`
    margin-top : 10px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
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
    display : flex;
    font-size : 0.9rem;
    color : gray;
    gap : 3px;
`

export default PopulCard;