import useReservations from '@/components/reservation-list/hooks/useReservations'
import Button from '@/components/shared/Button'
import FixedBottomButton from '@/components/shared/FixedBottomButton'
import styled from '@emotion/styled'
import ListRow from '@shared/ListRow'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function ReservationListPage() {
  const { data, isLoading, deleteReservation } = useReservations()
  const navigate = useNavigate();

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
      {
        data.length === 0 
        ? <NoDataList>예약 내역이 없습니다.</NoDataList>
        : data.map(({ hotel, reservation }) => (
          <ListRow
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
                subTitle={`${reservation.startDate} ~ ${reservation.endDate}`}
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
          />
      ))}
      <FixedBottomButton 
        label='홈으로 이동하기'
        onClick = {handleBackHome}
      />
    </div>
  )
}

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