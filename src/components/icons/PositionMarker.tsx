
import { GiPositionMarker } from "react-icons/gi";

export default function PositionMarker({ color, size } : { color? : string, size? : string }) {
  return (
    <GiPositionMarker 
      color = {color} 
      size = {size} 
    />
  )
}
