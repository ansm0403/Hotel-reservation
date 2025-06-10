import { MdOutlineLocalConvenienceStore } from "react-icons/md";

export default function ConveniIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <MdOutlineLocalConvenienceStore size={size} color = {color}/>
  )
}
