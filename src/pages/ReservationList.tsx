import useReservations from '@/components/reservation-list/hooks/useReservations'
import Button from '@/components/shared/Button'
import FixedBottomButton from '@/components/shared/FixedBottomButton'
import { navbarAtom } from '@/store/atom/navbar'
import styled from '@emotion/styled'
import ListRow from '@shared/ListRow'
import { Timestamp } from 'firebase/firestore'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

function ReservationListPage() {
  const { data, isLoading, deleteReservation } = useReservations()
  const navigate = useNavigate();
  const setNavbarState = useSetRecoilState(navbarAtom);

  useEffect(()=>{
    setNavbarState(false);

    return () => setNavbarState(true);
  }, []);

  const handleBackHome = useCallback(() => {
    navigate('/');
  },[navigate])

  const handleCancelReservation = ( {
    hotelId, roomId, reservId
  } : {
    hotelId : string, roomId : string, reservId : string
  }) => {
    deleteReservation({hotelId, roomId, reservId})
  }

  if (data == null || isLoading === true) {
    return null
  }

  return (
    <div>
      <TitleContainer>
        <span className='title'>예약 내역</span>
        <span className='count'>{data.length}</span>
      </TitleContainer>
      {
        data.length === 0 
        ? <NoDataList>예약 내역이 없습니다.</NoDataList>
        : data.map(({ hotel, reservation }) => {
           const from = formatTimestamp(reservation.startDate);
           const to = formatTimestamp(reservation.endDate);
           
          return(
            <CardContainer>
              <div>
                <img 
                  src = {hotel.mainImageUrl}
                  width = {150} 
                  height={150} 
                />
              </div>
              <div>
                <div>{hotel.name}</div>
                <div>{hotel.city}</div>
                <div>{reservation.price}원</div>
                <div>3박 4일</div>
              </div>
              {/* <ListRow
              key={reservation.id}
              left={
                <img
                  src={hotel.mainImageUrl}
                  alt={`${hotel.name} 이미지`}
                  width={80}
                  height={80}
                />
              }
              contents={
                <ListRow.Texts
                  title={hotel.name}
                  subTitle={`${from} ~ ${to}`}
                />
              }
              right = {
                <Button 
                  onClick = {()=>{
                    
                    handleCancelReservation({
                      hotelId : hotel.id, 
                      roomId : reservation.roomId, 
                      reservId : reservation.id
                    })
                  }}
                >
                  예약 취소
                </Button>
              }
            /> */}
          </CardContainer>
          )
      })}
      <FixedBottomButton 
        label='홈으로 이동하기'
        onClick = {handleBackHome}
      />
    </div>
  )
}

const CardContainer = styled.div`
  display : flex;
  flex-direction : row;
  padding : 10px 30px;
`

const TitleContainer = styled.div`
  padding : 25px;
  display : flex;
  gap : 10px;
  font-size : 1.2rem;

  .title {
    font-weight : bold;
  }

  .count {
    color : gray;
  }
`

const NoDataList = styled.div`
  position : absolute;
  white-space : nowrap;
  top : 50%;
  left : 50%;
  font-weight : bold;
  font-size : 1.5rem;
  transform : translate(-50%, -50%);
`


// Firestore에서 가져온 데이터가 Timestamp 객체인지 확인해야 합니다. 
// typeof timestamp를 사용하여 데이터 타입을 확인해 볼 수 있습니다. 
// 만약 문자열이나 숫자로 되어 있다면, new Timestamp(seconds, nanoseconds) 와 같은 방식으로 변환해야 합니다.
function formatTimestamp(timestamp : Timestamp){
  if (typeof timestamp === 'object' && timestamp !== null && timestamp.seconds !== undefined && timestamp.nanoseconds !== undefined) {
     // timestamp가 Firestore Timestamp 객체인 경우
      const date = timestamp.toDate();
      // date 사용 로직
      const year = date.getFullYear();
      const month = String(date.getMonth()+1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0')

      return `${year}년 ${month}월 ${day}일`
   } else if (typeof timestamp === 'string' || typeof timestamp === 'number') {
       // timestamp가 숫자 또는 문자열인 경우 Timestamp 객체로 변환
       const seconds = typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp;
       const date = new Timestamp(seconds, 0).toDate();
       // date 사용 로직
   } else {
     // timestamp가 Timestamp 객체가 아닌 경우 처리
     console.log("Invalid timestamp type:", typeof timestamp);
   }
}

export default ReservationListPage