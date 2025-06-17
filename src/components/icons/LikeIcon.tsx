import useLike from '@/hook/like/useLike'
import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

export default function LikeIcon({
    hotel
} : {
    hotel : HOTEL_2
}) {

    const { data: likes, mutate: like } = useLike()

    const { name, mainImageUrl, id, city, price, starRating } = hotel
    
    const isLike = Boolean(likes?.find((like) => like.hotelId === id))

    return (
        <div css = {buttonContainer} className='like'>
        <button
          css = {buttonStyles}
          onClick={() => {
            like({
              hotel: {
                name,
                mainImageUrl,
                id,
                city,
                price,
                starRating
              },
            })
          }}
          
        >
            {
                isLike 
                ? <IoMdHeart color = "red" size = "30px"/>
                : <IoIosHeartEmpty color = "white" size = "30px"/>
            }
        </button>
      </div>
  )
}

const buttonContainer = css`
    border-radius : 10px;
    position : absolute;
    padding : 5px 5px 0;
    top : 20px;
    right : 25px;
    z-index : 60;
    background : rgba(0,0,0, 30%);
`

const buttonStyles = css`

`