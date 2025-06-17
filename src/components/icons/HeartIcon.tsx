import { FaRegHeart } from "react-icons/fa";
export default function AtmosIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <FaRegHeart size={size} color = {color}/>
  )
}
