import { css } from '@emotion/react'
import { format } from 'date-fns/format'

export default function ReservDate({
    from, to, nights
} : {
    from : Date | undefined,
    to : Date | undefined,
    nights : number
}) {
  return (
    <div css={containerStyles}>
        <h1 className='title'>예약일</h1>
        <div className='date'>
            <span>
            {`${
            from && to
                ? `${format(from, 'yyyy-MM-dd')} → ${format(to, 'yyyy-MM-dd')}`  
                : "예약 날짜를 선택해주세요."
            }`}
          </span>
          <span>{`(${nights}박 ${nights+1}일)`}</span>
        </div>
      </div>
  )
}

const containerStyles= css`
    padding : 20px;

    .title{
        font-size : 1.2rem;
        font-weight : bold;
        margin-bottom : 1rem;
    }

    .date{
        display : flex;
        gap : 30px;
    }
`