
import { navbarAtom } from '@/store/atom/navbar'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import GoBackIcon from '@components/icons/GoBackIcon'
import GuestSelect from '@components/reservation/GuestSelect'
import ReservDate from '@components/reservation/ReservDate'
import ReservDayPicker from '@components/reservation/ReservDayPicker'
import RoomSelect from '@components/reservation/RoomSelect'
import SubmitButton from '@components/reservation/SubmitButton'
import { bookingAtom } from '@/store/atom/booking'
import { parse } from 'qs'
import { Navigate, useNavigate } from 'react-router-dom'

export interface BookingData {
    hotelId : string
    from : Date | undefined,
    to : Date | undefined,
    room : string | undefined,
    roomIdx : number,
    roomId : string,
    adults : number | undefined, 
    children : number | undefined,
    nights : number,
    price : number
}

export default function BookingPage() {
  const setNavbarState = useSetRecoilState(navbarAtom);
  const setBookingAtom = useSetRecoilState(bookingAtom);
  const navigate = useNavigate();
  const [goDonePage, setGoDonePage] = useState(false);

  const { hotelId } = parse(
    window.location.search,
    {ignoreQueryPrefix : true}
  ) as {
    hotelId : string
  }

  useEffect(()=>{
    setNavbarState(false);

    return () => setNavbarState(true);
  },[])

  const [ bookingData, setBookingData ] = useState<BookingData>({
    hotelId,
    from : undefined,
    to : undefined,
    room : undefined,
    roomIdx : 0,
    roomId : "",
    adults : undefined,
    children : undefined,
    nights : 0,
    price : 0
  })

  console.log("예약 데이터", bookingData);

  const handleGoBack = () => {
    window.history.back();
  }

  const handleDayPicker = (dateRange : {
    from : Date | undefined,
    to : Date | undefined,
    nights : number
  }) => {
    setBookingData(prev => ({
      ...prev,
      from : dateRange.from,
      to : dateRange.to,
      nights : dateRange.nights
    }))
  }

  const handleRoomSelect = (selected : string, roomIdx : number, roomId : string) => {
    setBookingData(prev => ({
      ...prev,
      roomIdx,
      roomId,
      room : selected
    }))
  }

  const handleGuestSelect = (selected : number | undefined, type : string) => {
    setBookingData(prev=>({
      ...prev,
      [type] : selected
    }))
  }

  const handleSubmit = (price : number) => {
    setBookingData(prev=>({
      ...prev,
      price
    }))
    setBookingAtom(bookingData);

    // navigate(`/reservation?hotel=${hotelId}`)
    setGoDonePage(true);
  }

  if(goDonePage) return <Navigate to = {`/reservation?hotel=${hotelId}`} />

  return (
    <div css = {containerStyles}>
        <GoBackIcon onClick={handleGoBack} size = "30px"/>
        <ReservDayPicker 
          from = {bookingData.from}
          to = {bookingData.to}
          onChange = {handleDayPicker}
        />
        <div className='bookingInfo'>
          <ReservDate 
            from = {bookingData.from} 
            to = {bookingData.to} 
            nights = {bookingData.nights}
          />
          <GuestSelect onChange={handleGuestSelect}/>
          <RoomSelect onChange = {handleRoomSelect}/>
        </div>
        <SubmitButton data = {bookingData} onSubmit = {handleSubmit}/>
    </div>
  )
}

const containerStyles = css`

  .bookingInfo {
    margin : 0 20px;
    margin-bottom : 30px;
    // box-shadow: 3px 3px 3px rgba(141, 239, 238, 0.1), 0 1px 1px rgba(0,0,0,0.15);
  }
`