import { IoRainyOutline } from "react-icons/io5";

import React from 'react'

export default function AtmosIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <IoRainyOutline size={size} color = {color}/>
  )
}
