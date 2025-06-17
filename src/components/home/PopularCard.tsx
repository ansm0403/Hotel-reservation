import { HOTEL_2 } from '@/models/hotel'
import { convertCity } from '@/utils/convert'
import { css } from '@emotion/react'
import { lazy } from 'react'

const Star = lazy(() => import('../icons/Star'))
const YenIcon = lazy(() => import('../icons/YenIcon'))

export default function PopularCard({
    hotel
} : {
    hotel : HOTEL_2
}) { 

  return (
    <div css = {containerStyles}>
        <div>
            <img 
                css = {imageStyles}
                src = {hotel.mainImageUrl}
            />
        </div>
        <div css = {contentsContainer}>
            <div className='title'>{hotel.name}</div>
            <div className='contents'>
                <div className='rating'>
                    <Star color = "orange"/>
                    {` ${hotel.starRating}`}
                </div>
                <div>
                    {convertCity(hotel.city)}
                </div>
                <div>
                    <YenIcon size = "12px" />
                    {` ${hotel.price}`}
                </div>
            </div>
        </div>
    </div>
  )
}
const containerStyles = css`
    border-radius : 10px;
    box-shadow: 2px 2px 2px rgba(170, 181, 181, 0.36), 0 1px 1px rgba(0, 0, 0, 0.05);
`

const imageStyles = css`
    width : 100%;
    height : 100px;
    border-top-left-radius : 10px;
    border-top-right-radius : 10px;
`
const contentsContainer = css`
    color : gray;
    height : 60px;
    display : flex;
    padding : 5px;
    flex-direction : column;
    justify-content : space-between;

    .title {
        font-weight : bold;
        color : black;
    }

    .contents {
        display : flex;
        flex-direction : row;
        justify-content : space-between;

        .rating {
            position : relative;
            bottom : 3px;
        }
    }
`