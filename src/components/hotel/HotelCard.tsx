import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { lazy, Suspense } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate();

  return (
    <Suspense fallback={<Skeleton />}>
        <Container isInfo = {isInfo} >
                <LazyLoadImage
                    src = {hotel.mainImageUrl}
                    alt = {"추천 호텔"}
                    css = {imageStyles}
                    onClick = {(e)=>navigate(`/hotel/${hotel.id}`)}
                />
                <div css={contentsContainerStyles}>
                    <div className='content'>
                            <div css = {titleStyles}>
                                {hotel.name}
                            </div>
                            <div style = {{display : "flex", gap : "0.3rem"}}>
                                    <PositionMarker color = {"black"} />
                                    {hotel.city}
                            </div>
                    </div>
                    <div className='content'>
                            <div style = {{display : "flex", gap : "0.3rem"}}>
                                    <Star color = {"orange"}/>
                                    {hotel.starRating}
                                </div>
                            <div css = {priceContainerStyles}>
                                {"최저가 "}                   
                                <span style = {{fontWeight : "bold", fontSize : "1.05rem"}}>{hotel.price + " ~ " + hotel.price*1.75}</span>
                                <YenIcon size = {"1.2rem"}/>
                            </div>
                        </div>
                    </div>
        </Container>
    </Suspense>
  )
}

function Skeleton(){
    return(
        <div css = {skeletonStyles}>
        </div>
    )
}
const skeletonStyles = css`
    width : 140px;
    height: 100px;
    background : gray;
    position : relative;
    left : 52%;
    margin-top : 10px;
`

const Container = styled.div<ContainerProps>`
    width : 100%;
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
    margin : 0px;
    height : 300px;
    left : 0;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    items-align : center;
`


const contentsContainerStyles = css`
    background : rgba(255, 255, 255, 0.3);
    position : absolute;
    display : flex;
    flex-direction : column;
    justify-content : center;
    items-align : center;
    color : dark;
    width : 94%;
    height : 30%;
    margin : 10px;
    bottom : 0;
    border-radius : 20px;
    backdrop-filter: blur(8px); /* 배경 흐림 */

    .content {
        padding : 7px;
        display : flex;
        font-size : 1.1rem;
        flex-direction : row;
        items-align : center;
        justify-content : space-between;
    }
`

const titleStyles = css`
    font-weight : bold;
    text-align : left;
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
    color : black;
    gap : 3px;
`

const imageStyles = css`
    width : 100%;
    height : 100%;
    transition : 1s all;
    object-fit: cover;
    border-radius : 10px;
`

{/* {
            isInfo 
            ? (
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
            )
            : <></>
        } */}