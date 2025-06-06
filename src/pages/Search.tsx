
import { lazy } from 'react'

const AboveContainer = lazy(()=>import("@/components/home/AboveContainer"));
const SearchBar = lazy(()=>import("@/components/home/SearchBar"));

export default function SearchPage() {
  return (
    <AboveContainer height='150px'>
        <SearchBar />
    </AboveContainer>
  )
}

