
import PlaneIcon from '@/components/icons/PlaneIcon'
import Star from '@/components/icons/Star'
import WonIcon from '@/components/icons/WonIcon'
import useLike from '@/hook/like/useLike'
import { convertCity } from '@/utils/convert'
import styled from '@emotion/styled'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function LikeListPage() {
  const { data } = useLike()
  const navigate = useNavigate();

  const handleGoHotel = useCallback((hotelId : string) => {
    navigate(`/hotel/${hotelId}`)
  },[navigate])

  if (data == null) {
    return null
  }

  return (
    <div>
      <TitleContainer>
        <span className='title'>찜목록</span>
        <span className='count'>{data.length}</span>
      </TitleContainer>
      {data.map((like) => (
        <CardContainer key = {like.id} onClick={e => handleGoHotel(like.hotelId)}>
              <div>
                <img 
                  src = {like.hotelMainImageUrl}
                  width = {150} 
                  height={170} 
                />
              </div>
              <div className='contents'>
                <div className='name'>{like.hotelName}</div>
                <div className='content'>
                  <PlaneIcon size="18px" color='gray'/>
                  <span>{convertCity(like.hotelRegion)}</span>
                </div>
                <div className='content'>
                  <Star color='orange'/>
                  {like.hotelRating}
                </div>
                <div className='content'>
                  <WonIcon size = "20px" color='gray'/>
                    최저가 {like.hotelPrice * 10}원 ~
                </div>
                <div className='price'>
                  <span>{like.hotelPrice * 10 * 1.75}원</span>
                </div>
              </div>
          </CardContainer>
      ))}
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

  .price {
    position : relative;
    left : 100px;
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

export default LikeListPage