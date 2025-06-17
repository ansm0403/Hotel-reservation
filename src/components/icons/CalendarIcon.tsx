import { IoIosCalendar } from "react-icons/io";

import React from 'react'

export default function CalendarIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <IoIosCalendar size={size} color = {color} />
  )
}
