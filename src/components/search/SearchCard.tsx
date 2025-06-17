import { HOTEL_2 } from '@/models/hotel'
import { convertCity } from '@/utils/convert'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import PositionMarker from '../icons/PositionMarker'
import Star from '../icons/Star'
import YenIcon from '../icons/YenIcon'

interface HotelProps {
    hotel : HOTEL_2
}

export default function SearchCard({
    hotel
} : HotelProps) 
{
  return (
    <Link to = {`/hotel/${hotel.id}`}>
        <Container>
            <div css = {contentsStyles}>
                <img 
                    src = {hotel.mainImageUrl} 
                    alt = "호텔이미지" 
                    width = {100}
                    height = {90}
                />
                <div css = {infoStyles}>
                    <div className='title'>{hotel.name}</div>
                    <div className='city'>
                        <PositionMarker />
                        {convertCity(hotel.city)}</div>
                    <div css = {ratingStyles}>
                        <Star color='orange'/>
                        {hotel.starRating}
                    </div>
                </div>
            </div>
            <div css = {priceContainerStyles}>
                <div css = {priceStyles}>
                    {"최저가 "}
                    {hotel.price}
                    <YenIcon size = "17" />
                </div>
            </div>
        </Container>
    </Link>
  )
}

const Container = styled.div`
    margin : 10px;
    color : gray;
    margin-right : 10px;
    display : flex;
    text-align : right;
    background : white;
    margin : 10px;
    flex-direction : row;
    justify-content : space-between;
    font-size : 1.0rem;
    box-shadow : 3px 3px 3px rgba(141, 239, 238, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
`
const contentsStyles = css`
    display : flex;
    flex-direction : row;
    gap : 10px;
`

const infoStyles = css`
    display : flex;
    flex-direction : column;
    justify-content : space-around;

    .city{
        display : flex;
        justify-content : flex-start;
    }

    .title{
        color : black;
        font-weight : bold;
    }
`

const ratingStyles = css`
    display : flex;
    gap : 5px;
    justify-content : flex-start;
`

const priceContainerStyles = css`
    display : flex;
    flex-direction : column;
    justify-content : flex-end;
    margin-bottom : 6px;
`
const priceStyles = css`
    color : brown;
    display : flex;
`
