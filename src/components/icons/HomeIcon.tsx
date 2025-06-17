import { IoHomeOutline } from "react-icons/io5";


export default function HomeIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <IoHomeOutline size={size} color = {color}/>
  )
}
