import { LuPlane } from "react-icons/lu";

export default function PlaneIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <LuPlane size={size} color={color}/>
  )
}
