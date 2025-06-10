import { CopyToClipboard } from 'react-copy-to-clipboard'

import { css } from '@emotion/react'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import { HOTEL_2 } from '@models/hotel'
import useLike from '@/hook/like/useLike'
import useShare from '@/hook/useShare'
import { IoIosLink } from "react-icons/io"

function ActionButtons({ hotel }: { hotel: HOTEL_2 }) {
  const share = useShare()
  const { data: likes, mutate: like } = useLike()

  const { name, comment, mainImageUrl, id } = hotel

  const isLike = Boolean(likes?.find((like) => like.hotelId === hotel.id))

  return (
    <Flex css={containerStyles}>
      {/* <div css = {buttonContainer} className='like'>
        <Button
          css = {buttonStyles}
          label="찜하기"
          onClick={() => {
            like({
              hotel: {
                name,
                mainImageUrl,
                id,
              },
            })
          }}
          iconUrl={
            isLike
              ? 'https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-64.png'
              : 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-64.png'
          }
        />
      </div> */}
      <div css = {buttonContainer} className='share'>
        <Button
          css = {buttonStyles}
          label="공유하기"
          onClick={() => {
            share({
              title: name,
              description: comment,
              imageUrl: mainImageUrl,
              buttonLabel: 'Love Trip에서 보기',
            })
          }}
          iconUrl="https://cdn1.iconfinder.com/data/icons/rounded-social-media/512/kakao-64.png"
        />
      </div>
      <CopyToClipboard
          text={window.location.href}
          onCopy={() => {
            alert('링크가 복사되었습니다.')
        }}
      >
      <div css = {buttonContainer} className='copy'>
        <button
            css = {buttonStyles}
        >
          <IoIosLink size = {30}/>
        </button>
      </div>
      </CopyToClipboard>
    </Flex>
  )
}

export function Button({
  label,
  iconUrl,
  onClick,
  className
} : {
  label: string
  iconUrl: string
  onClick?: () => void
  className? : string
}) {
  return (
    <Flex className={className} direction="column" align="center" onClick={onClick}>
      <img src={iconUrl} alt="" width={30} height={30} />
      <Spacing size={6} />
      {/* <Text typography="t7" color = "white" >{label}</Text> */}
    </Flex>
  )
}

const containerStyles = css`
  cursor: pointer;
  & * {
    flex: 1;
  }

  .share {
    padding : 10px 10px;
    right : 30px;
    top : 15px;
  }

  .copy {
    right : 30px;
    top : 70px;
    padding : 10px 10px;
  }
`

const buttonContainer = css`
  border-radius : 10px;
  position : absolute;
  top : 10px;
  z-index : 60;
`

const buttonStyles = css`

`

export default ActionButtons