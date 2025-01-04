
import FixedBottomButton from '@/components/shared/FixedBottomButton'
import useLike from '@/hook/like/useLike'
import ListRow from '@shared/ListRow'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function LikeListPage() {
  const { data } = useLike()
  const navigate = useNavigate();

  const handleBackHome = useCallback(() => {
    navigate('/');
  },[navigate])

  const handleGoHotel = useCallback((hotelId : string) => {
    navigate(`/hotel/${hotelId}`)
  },[navigate])

  if (data == null) {
    return null
  }

  return (
    <div>
      {data.map((like) => (
        <ListRow
          key={like.id}
          left={
            <img
              src={like.hotelMainImageUrl}
              alt={`${like.hotelName} 이미지`}
              width={80}
              height={80}
            />
          }
          contents={
            <ListRow.Texts
              title={like.hotelName}
            />
          }
          onClick = {() => handleGoHotel(like.hotelId)}
        />
      ))}
      <FixedBottomButton 
        label='홈으로 이동하기'
        onClick = {handleBackHome}
      />
    </div>
  )
}

export default LikeListPage