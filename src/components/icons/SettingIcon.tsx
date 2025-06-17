import { GrSettingsOption } from "react-icons/gr";
export default function AtmosIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <GrSettingsOption size={size} color = {color}/>
  )
}
