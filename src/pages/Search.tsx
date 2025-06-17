
import Avatar from '@/components/home/Avatar';
import { lazy } from 'react'

const AboveContainer = lazy(()=>import("@/components/home/AboveContainer"));
const SearchBar = lazy(()=>import("@/components/home/SearchBar"));
const SearchList = lazy(()=>import('@/components/search/SearchList'));

export default function SearchPage() {
  return (
    <>
      <AboveContainer>
        <div style = {{height : "19.2px"}}></div>
        <SearchBar />   
      </AboveContainer> 
      <SearchList />
    </>
  )
}

