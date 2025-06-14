import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import YenIcon from '../icons/YenIcon'

export default function ReservationButton({
    price,
    id
} : {  
    price : number,
    id : string
}) { 
  return (
    <div css = {containerStyles}>
        <div css = {textContainer}>
            <div className = "price--title">가격</div>
            <div>
                <span>{"최저 "}</span>
                <span className='price'>
                    <YenIcon size = "15px"/>
                    {price}
                </span>
                /night
            </div>
        </div>
        <Link to = {`/booking?yen=${price}&hotelId=${id}`}>
            <button css = {buttonStyles}>예약하기</button>
        </Link>
    </div>
  )
}

const containerStyles = css`
    width : 100%;
    display : flex;
    items-align : center;
    justify-content : space-around;
    position : fixed;
    padding : 20px 0px;
    background : white;
    bottom : 0;
    z-index : 90;
`
const textContainer = css`
    display : flex;
    flex-direction : column;
    items-align : center;
    justify-content : space-around;
    color : gray;
    .price {
        color : black;
        font-size : 1.3rem;
    }
`

const buttonStyles = css`
    width : 200px;
    height : 50px;
    border-radius : 15px;
    background : linear-gradient(to right,rgb(196,173,141) 0%,rgb(179,157,128) 34.48%, rgb(153,133,108) 100%);
    color : white;
    cursor : pointer;
`