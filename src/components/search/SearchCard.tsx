import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
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
                    <div className='city'>{convertCity(hotel.city)}</div>
                    <div css = {ratingStyles}>
                        <Star color='orange'/>
                        {hotel.starRating}
                    </div>
                </div>
            </div>
            <div css = {priceContainerStyles}>
                <div css = {priceStyles}>
                    <YenIcon size = "17" />
                    {hotel.price}
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
    padding : 10px;
    flex-direction : row;
    justify-content : space-between;
    font-size : 1.0rem;
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
    display : flex;
`

function convertCity(city : string){
    switch(city){
        case "Osaka" : return "오사카"
        case "Fukuoka" : return "후쿠오카"
        case "Tokyo" : return "도쿄"
        case "Kyoto" : return "교토"
        default : return ""
    }
}