import priceConvert from '@/utils/priceConvert'
import styled from '@emotion/styled'
import { MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BookingData } from '../../pages/BookingPage'

export default function SubmitButton({
  data,
  onSubmit
} : {
  data : BookingData,
  onSubmit : (price : number) => void
}) {

  const {nights, room, adults, children} = data;
  
  const [searchParams] = useSearchParams();
    const yen = Number(searchParams.get('yen') as string)

  let price = 0;

  if(room && room !== "선택"){
    price = priceConvert(yen, room);
    console.log("가격 초기 설정")
    if(adults) {
      price = price + ((adults-2) * 20000)
      console.log("성인 초기 설정")
    }
    if(children) {
      price = price + (children * 10000)
      console.log("아동 초기 설정")
    }
    if(nights !== 0) {
      price = price * nights
      console.log("날짜 초기 설정")
    }
  }
  
  const handleSubmit = (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(price);
  }

  return (
    <Button disabled = {price === 0 ? true : false} onClick = {handleSubmit}>
      <div>{price}원</div>
      <div>예약하기</div>
    </Button>
  )
}

const Button = styled.button<{ disabled : boolean }>`
  opacity : ${(props) => props.disabled ? "40%" : "100%"};
  width : 60%;
  margin : auto;
  font-size : 1.3rem;
  display : flex;
  flex-direction : row;
  gap : 20px;
  color : white;
  padding : 30px 10px;
  border-radius : 40px;
  justify-content : center;
  background : skyblue;
  position : relative;
  top : 30px;
`