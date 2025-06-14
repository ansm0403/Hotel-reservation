import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import ListRow from '@shared/ListRow'
import Tag from '@shared/Tag'
import Spacing from '@shared/Spacing'
import addDelimiter from '@utils/addDelimiter'
import useRooms from './hooks/useRooms'
import qs from 'qs'
import { useSetRecoilState } from 'recoil'
import { roomsAtom } from '@/store/atom/rooms'
import { Room } from '@/models/room'
import priceConvert from '@/utils/priceConvert'
// import useUser from '@/hook/auth/useUser'
// import { useAlertContext } from '@/contexts/AlertContext'
// import { useNavigate } from 'react-router-dom'

function Rooms({ 
  hotelId, 
  images,
  price 
}: { 
  hotelId: string, 
  images : string[],
  price : number
}) {
  const { data } = useRooms({ hotelId })

  const setRoomsState = useSetRecoilState(roomsAtom);

  if(data) {
    setRoomsState(data);
  }

  // const user = useUser();
  // const { open } = useAlertContext();
  // const navigate = useNavigate();

  return (
    <Container>
      <Header justify="space-between" align="center">
        <Text bold={true} typography="t4">
          객실 정보
        </Text>
        <Text typography="t6" color="gray400">
          1박, 세금 포함
        </Text>
      </Header>
      <ul>
        {data?.map((room, index) => {
          const 마감임박인가 = room.avaliableCount === 1
          const 매진인가 = room.avaliableCount === 0

          const params = qs.stringify({
            roomId : room.id,
            hotelId,
          },
          {
            addQueryPrefix : true
          }
        )
          return (
            <ListRow
              key={room.id}
              left={
                <img
                  src={images[index]}
                  alt={`${room.roomName} 의 객실 이미지`}
                  css={imageStyles}
                />
              }
              contents={
                <ListRow.Texts
                  title={
                    <Flex>
                      <Text>{room.roomName}</Text>
                      {마감임박인가 === true ? (
                        <>
                          <Spacing size={6} direction="horizontal" />
                          <Tag backgroundColor="red">마감임박</Tag>
                        </>
                      ) : null}
                    </Flex>
                  }
                  subTitle={`${addDelimiter(priceConvert(price, room.roomName))}원 / `.concat(
                    room.refundable ? '환불가능' : '환불불가',
                  )}
                />
              }
              right={
                <Button 
                  disabled={매진인가} 
                  // onClick = {()=>{
                  //   if(user == null){
                  //     open({
                  //       title : "로그인이 필요한 기능입니다.",
                  //       onButtonClick : () => {
                  //         navigate('/signin')
                  //       }
                  //     })
                  //     return
                  //   }
                  //   navigate(`/schedule${params}`)
                  // }}
                >
                  {매진인가 === true ? '매진' : '가능'}
                </Button>
              }
            />
          )
        })}
      </ul>
    </Container>
  )
}

const Button = styled.button`
  background : linear-gradient(to right,rgb(196,173,141) 0%,rgb(179,157,128) 34.48%, rgb(153,133,108) 100%);
  color : white;
  border-radius : 5px;
  padding : 10px 15px;
`

const Container = styled.div`
  margin: 40px 0;
`

const Header = styled(Flex)`
  padding: 0 24px;
  margin-bottom: 20px;
`

const imageStyles = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`

export default Rooms




// 