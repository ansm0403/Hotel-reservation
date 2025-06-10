import { HOTEL_2 } from '@/models/hotel'
import { css } from '@emotion/react'
import { lazy } from 'react'
import Flex from './Flex'
import Text from './Text'

const PositionMarker = lazy(()=>import('../icons/PositionMarker'))
const Star = lazy(()=>import('../icons/Star'))
const ActionButtons = lazy(()=>import('../hotel/ActionButtons'))

interface TopProps {
  title?: string
  subTitle?: string
  data? : HOTEL_2
}

function Top({ title, subTitle, data }: TopProps) {
  return (
    <Flex direction="column" css={containerStyles} gap = "7px">
      <Text bold={true} typography="t4">
        {title}
      </Text>
      <Text>
        <div css = {titleStyles}>
          <PositionMarker color = "gray" size = "1.2rem" />
          <div>
          {`${data?.city}, japan`}
          </div>
        </div>
      </Text>
      <div css = {titleStyles}>
        <Star color = "orange" />
        {data?.starRating}
      </div>
      <Text typography="t7">{subTitle}</Text>
      {
        data && <ActionButtons hotel={data}/>
      }
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
`
const titleStyles = css`
  display : flex;
  items-align : center;
  gap : 6px;
`

export default Top