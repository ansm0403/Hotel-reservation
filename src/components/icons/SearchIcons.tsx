
import { CiSearch } from 'react-icons/ci'

interface iconProps {
    size? : number;
    color? : string;
}

export default function SearchIcons({size, color} : iconProps) {
  return (
    <CiSearch size = {size} color = {color} />
  )
}
