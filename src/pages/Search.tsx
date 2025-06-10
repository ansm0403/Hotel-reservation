
import { lazy } from 'react'

const AboveContainer = lazy(()=>import("@/components/home/AboveContainer"));
const SearchBar = lazy(()=>import("@/components/home/SearchBar"));
const SearchList = lazy(()=>import('@/components/search/SearchList'));

export default function SearchPage() {
  return (
    <>
      <AboveContainer height='150px'>
          <SearchBar />    
      </AboveContainer>
      <SearchList />
    </>
  )
}

