
import MyInfoBox from "@/components/my/MyInfoBox";
import useReservations from "@/components/reservation-list/hooks/useReservations";
import useLike from "@/hook/like/useLike";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Spacing from "@/components/shared/Spacing";
import { ReservationSnapshot } from "@/models/reservation";
import { Hotel } from '@models/hotel'
import { Like } from '@models/like'
import Flex from "@/components/shared/Flex";
import { css } from "@emotion/react";
import { formatTimestamp } from "@/utils/formatTime";


export default function MyPage() {

  const {data : reservations, isLoading} = useReservations();
  const {data : likes} = useLike();
 
  const navigate = useNavigate();
  const reservationCount = reservations?.length as number

  return(
    <Container>
      <MyInfoBox
        title = "예약"
        count = {reservationCount}
        contents = {
          isLoading 
          ? <MyInfoBox.Skeleton />
          : <ReservationContents 
              reservations={reservations}
              onClick = {(id : string) => navigate(`/hotel/${id}`)}
            />
        }
        buttonLabel = "예약 내역 자세히 보기"
        handleButton={()=>{navigate("/reservation/list")}}
        buttonDisabled = {false}
      />
      <Spacing size = {10} />
      <MyInfoBox 
        title = "찜목록"
        count = {likes?.length as number}
        contents = {
          isLoading 
          ? <MyInfoBox.Skeleton />
          : <LikeContents 
              likes={likes}
              onClick = {(id : string) => navigate(`/hotel/${id}`)}
            />
        }
        buttonLabel = "찜목록 내역 자세히 보기"
        handleButton={() => navigate("/like/list")}
      />
    </Container>
  )
}

interface ReservContentsProps {
  reservation : ReservationSnapshot & { id : string }
  hotel : Hotel
}

function ReservationContents({
  reservations,
  onClick 
}:{ 
  reservations : ReservContentsProps[] | undefined
  onClick : (id : string) => void
}){

  const reservationCount = 
    reservations?.length as number < 2 
    ? reservations?.length 
    : 2;

  return(
    <>
    {
      reservations?.slice(0, reservationCount).map(({hotel, reservation})=>{
        return (
          <li key = {reservation.id}>
            <Flex align="center" direction="column" style={{padding : "10px 0", gap : "10px"}}>
              <img 
                src = {hotel.mainImageUrl}
                alt = "myPage-reservation"
                width = {400}
                css = {contentsImageStyle}
                onClick = {(e) => onClick(hotel.id)}
              />
              <h5 style = {{fontSize : "15px", fontWeight : "bold"}}>{hotel.name}</h5>
              <p>{`${formatTimestamp(reservation.startDate)} ~ ${formatTimestamp(reservation.endDate)}`}</p>                  
            </Flex>
          </li>
        )}
      )
    }
    </>
  )
}


function LikeContents({
  likes,
  onClick
}:{
  likes : Like[] | undefined,
  onClick : (id : string) => void
}){

  const likeCount = 
  likes?.length as number < 2 
  ? likes?.length 
  : 2;

  return(
    <>
    {
      likes?.slice(0, likeCount).map((like)=>{
        return(
        <li key = {like.id}>
          <Flex direction="column" style ={{padding : "10px 0" , gap : "10px"}}>
            <img 
              src = {like.hotelMainImageUrl}
              alt = "myPage-like"
              css = {contentsImageStyle}
              onClick = {(e) => onClick(like.hotelId)}
            />
            <h5 style = {{fontWeight : "bold", textAlign : "center"}}>{like.hotelName}</h5>
          </Flex>
        </li>
      )})
    }
    </>
  )
}


const Container = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  padding-bottom : 40px;
  margin-bottom : 30px;
`

const contentsImageStyle = css`
  object-fit : cover;
  width : 300px;
  @media (mix-width : 500px){
    width : 400px;
  }
`