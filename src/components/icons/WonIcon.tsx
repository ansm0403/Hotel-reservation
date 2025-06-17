
import { TbCurrencyWon } from "react-icons/tb";

export default function WonIcon({
    size,
    color
} : {
    size? : string
    color? : string
}) {
  return (
    <TbCurrencyWon size={size} color={color} />
  )
}
