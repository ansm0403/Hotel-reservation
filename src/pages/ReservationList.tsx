import CalendarIcon from '@/components/icons/CalendarIcon'
import PlaneIcon from '@/components/icons/PlaneIcon'
import WonIcon from '@/components/icons/WonIcon'
import useReservations from '@/components/reservation-list/hooks/useReservations'
import FixedBottomButton from '@/components/shared/FixedBottomButton'
import { useAlertContext } from '@/contexts/AlertContext'
import { navbarAtom } from '@/store/atom/navbar'
import { convertCity } from '@/utils/convert'
import { formatTimestamp } from '@/utils/formatTime'
import styled from '@emotion/styled'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'


function ReservationListPage() {
  const { data, isLoading, deleteReservation } = useReservations()
  const navigate = useNavigate();
  const setNavbarState = useSetRecoilState(navbarAtom);

  const { open } = useAlertContext();

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
            <CardContainer key = {reservation.id}>
              <div>
                <img 
                  src = {hotel.mainImageUrl}
                  width = {150} 
                  height={170} 
                />
              </div>
              <div className='contents'>
                <div className='name'>{hotel.name}</div>
                <div className='content'>
                  <PlaneIcon size="18px" color='gray'/>
                  <span>
                    {convertCity(hotel.city)}
                  </span>
                </div>
                <div className='content'>
                  <CalendarIcon  color='gray'/>
                  3박 4일
                </div>
                <div className='content'>
                  <WonIcon size = "20px" color='gray'/>
                  {reservation.price}원
                </div>
                <div>
                  <button 
                  className='button'
                  onClick = {()=>{
                    open({
                      title : "예약을 취소하시겠습니까?",
                      onButtonClick : () => {
                        handleCancelReservation({
                          hotelId : hotel.id, 
                          roomId : reservation.roomId, 
                          reservId : reservation.id
                        })
                      }
                    })
                  }}
                >
                  예약 취소
                </button>
                </div>
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
  margin : 10px 30px;
  overflow : hidden;
  gap : 10px;
  border-top-left-radius : 20px;
  border-bottom-left-radius : 20px;
  box-shadow: 2px 2px 2px rgba(170, 181, 181, 0.36), 0 1px 1px rgba(0, 0, 0, 0.05);

  .contents {
    padding-top : 10px;
    padding-bottom : 20px;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    gap : 10px;
  }

  .name {
    font-size : 0.9rem;
    font-weight : bold;
  }

  .content {
    display : flex;
    gap : 5px;
  }

  .button {
    display : flex;
    flex-direction : flex-end;
    background : linear-gradient(to right,rgb(196,173,141) 0%,rgb(179,157,128) 34.48%, rgb(153,133,108) 100%);
    color : white;
    border-radius : 5px;
    padding : 5px;
  }
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

export default ReservationListPage