
import { CgProfile } from "react-icons/cg";

export default function ProfileIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <CgProfile size={size} color = {color}/>
  )
}
