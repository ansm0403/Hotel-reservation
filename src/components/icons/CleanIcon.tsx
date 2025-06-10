import { MdOutlineCleaningServices } from "react-icons/md";

export default function CleanIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <MdOutlineCleaningServices size={size} color = {color}/>
  )
}

