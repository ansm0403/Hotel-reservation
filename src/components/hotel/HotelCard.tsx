import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { lazy, Suspense } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PositionMarker = lazy(() => import('../icons/PositionMarker'))
const Star = lazy(() => import('../icons/Star'))
const YenIcon = lazy(() => import('../icons/YenIcon'))

interface ContainerProps {
    isInfo : boolean
}

export default function HotelCard({ 
    hotel,
    isInfo = true
}: { 
    hotel : HOTEL_2
    isInfo? : boolean
}) {
  return (
    <Suspense fallback = {<></>}>
    <Container isInfo = {isInfo} >
        <div css = {imageContainerStyles}>
            <LazyLoadImage
                src = {hotel.mainImageUrl}
                alt = {"추천 호텔"}
                css = {imageStyles}
            />
            <div css = {titleStyles}>
                    {hotel.name}
            </div>
        </div>
        {
            isInfo 
            ? (
                <div css = {contentsContainerStyles}>
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
            )
            : <></>
        }
    </Container>
    </Suspense>
  )
}

const Container = styled.div<ContainerProps>`
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

const containerStyles = css`
    margin : 10px;
    height : 200px;
    @media (min-width : 420px){
        height : 230px;
    }
    position : relative;
    left : 50%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    items-align : center;
`

const imageContainerStyles = css`
    
`

const contentsContainerStyles = css`
    display : flex;
    flex-direction : column;
    justify-content : flex-end;
    height : 100%;
`

const titleStyles = css`
    margin-top : 10px;
    font-weight : bold;
    text-align : center;
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
    width : 100%;
    height : 100px;
    @media (min-width: 420px){
        width : 100%;
        height : 150px;
    }
    transition : 1s all;
    object-fit: cover;
    border-radius : 20px;
`