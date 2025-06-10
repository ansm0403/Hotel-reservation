import { css } from "@emotion/react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function GoBackIcon({
    size,
    color,
    className,
    onClick
} : {
    size? : string
    color? : string,
    className? : string,
    onClick? : () => void
}) {
  return (
    <IoMdArrowRoundBack className={className} css = {iconStyles} size = {size} color = {color} onClick={onClick} /> 
  )
}

const iconStyles = css`
    position : absolute;
    top : 15px;
    right : 20px;
    cursor : pointer;
`