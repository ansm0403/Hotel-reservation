import { parse } from 'qs'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import Summary from '@components/reservation/Summary'
import Spacing from '@shared/Spacing'
import Form from '@components/reservation/Form'
import addDelimiter from '@utils/addDelimiter'
import useUser from '@/hook/auth/useUser'
import useReservation from '@/components/reservation/hooks/useReservation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { bookingAtom } from '@/store/atom/booking'
import { BookingData } from './BookingPage'
import { format } from 'date-fns/format'
import { navbarAtom } from '@/store/atom/navbar'
import GoBackIcon from '@/components/icons/GoBackIcon'

export default function ReservationPage() {
  const user = useUser()
  const [goDonePage, setGoDonePage] = useState(false);
  const setNavbarState = useSetRecoilState(navbarAtom);
  const bookingData = useRecoilValue(bookingAtom);

  const { from : startDate, to : endDate, nights, roomId, hotelId } = bookingData as BookingData

  useEffect(()=>{
    setNavbarState(false);

    return () => setNavbarState(true);
  }, []);

  // const { startDate, endDate, nights, roomId, hotelId } = parse(
  //   window.location.search,
  //   { ignoreQueryPrefix: true },
  // ) as {
  //   startDate: string
  //   endDate: string
  //   nights: string
  //   roomId: string
  //   hotelId: string
  // }

  useEffect(() => {
    if (
      [user, startDate, endDate, nights, roomId, hotelId].some((param) => {
        return param == null
      })
    ) {
      window.history.back()
    }
  }, [user, startDate, endDate, nights, roomId, hotelId])

  const { data, isLoading, makeReservation } = useReservation({
    hotelId,
    roomId, 
  })

  if (data == null || isLoading === true) {
    return null
  }

  const { hotel, room } = data

  if(goDonePage) return <Navigate to = {`/reservation/done?hotelName=${hotel.name}`} />

  const handleSubmit = async (formValues: { [key: string]: string }) => {

    const newReservation = {
      userId: user?.uid as string,
      hotelId,
      roomId,
      startDate,
      endDate,
      price: room.price * Number(nights),
      formValues,
    }

    await makeReservation(newReservation)

    setGoDonePage(true);
  }

  const handleBack = () => {
    window.history.back();
  }

  const buttonLabel = `${nights}박 ${addDelimiter(
    room.price * Number(nights),
  )}원 예약하기`

  return (
    <div>
      <GoBackIcon size = "30px" onClick={handleBack}/>
      <Summary
        hotelName={hotel.name}
        room={room}
        startDate={format(startDate as Date, "yyyy-MM-dd")}
        endDate={format(endDate as Date, "yyyy-MM-dd")}
        nights={nights.toString()}
      />
      <Spacing size={8} backgroundColor="gray100" />
      <Form
        onSubmit={handleSubmit}
        forms={hotel.forms}
        buttonLabel={buttonLabel}
      />
    </div>
  )
}
