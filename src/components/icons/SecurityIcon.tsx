import { PiSecurityCamera } from "react-icons/pi";
import React from 'react'

export default function SecurityIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <PiSecurityCamera size={size} color = {color}/>
  )
}
