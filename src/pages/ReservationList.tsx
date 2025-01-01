import useReservations from '@/components/reservation-list/hooks/useReservations'
import FixedBottomButton from '@/components/shared/FixedBottomButton'
import ListRow from '@shared/ListRow'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function ReservationListPage() {
  const { data, isLoading } = useReservations()
  const navigate = useNavigate();

  const handleBackHome = useCallback(() => {
    navigate('/');
  },[navigate])


  if (data == null || isLoading === true) {
    return null
  }

  return (
    <div>
      {data.map(({ hotel, reservation }) => (
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
        />
      ))}
      <FixedBottomButton 
        label='홈으로 이동하기'
        onClick = {handleBackHome}
      />
    </div>
  )
}

export default ReservationListPage