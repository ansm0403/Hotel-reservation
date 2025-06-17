import useDebounce from '@/hook/useDebounce';
import { searchQueryActions } from '@/store';
import { css } from '@emotion/react'
import { ChangeEvent, lazy, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const SearchIcons = lazy(()=>import("../icons/SearchIcons"));

export default function SearchBar({ onClick } : { onClick? : () => void}) {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery || "", 500);
  // const setSearch = useSetRecoilState(searchAtom);

  const setSearch = useDispatch();

  useEffect(()=>{
    if(debouncedQuery == null || city == null){
      return;
    }
    setSearch(searchQueryActions.SET({
      keyword : debouncedQuery,
      city
    }))
  }, [debouncedQuery, city])

  const handleSelect = (e : ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  }

  const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div css = {containerStyles}>
      <div css = {searchContainerStyles} onClick = {onClick}>
        <div css = {inputContainerStyles} >
          <SearchIcons size = {30} color = {"gray"}/>
          <input
              css = {inputStyles}
              placeholder='호텔명을 입력해주세요.'
              value = {searchQuery}
              onChange = {handleInput}
              type = "text"
          />
        </div>
      </div>
      <select css = {selectStyles} onChange = {handleSelect}>
            <option value={""}>지역명</option>
            <option value={"Tokyo"}>도쿄</option>
            <option value={"Osaka"}>오사카</option>
            <option value={"Kyoto"}>교토</option>
            <option value={"Hiroshima"}>히로시마</option>
            <option value={"Fukuoka"}>후쿠오카</option>
      </select>
    </div>
  )
}

const containerStyles = css`
    display : flex;  
    width : 90%;
    margin : auto;
    margin-top : 80px;
    gap : 10px;
    justify-content : space-around;
    flex-direction : column;
    @media (min-width : 365px){
      flex-direction : row;
    }
`
const searchContainerStyles = css`
    width : 98%;
    @media (min-width : 365px){
      width : 70%;
    }
    padding : 0px;
    display : flex;
    flex-direction : column;
    background-color : white;
    border-radius : 10px;
    cursor : pointer;
`
const inputContainerStyles = css`
  display : flex;
  align-items : center;
  background : white;
  border : 1px solid gray;
  border-radius : 5px;
  padding-left : 10px;
`
const inputStyles = css`
  border : none;
  width : 100%;
  background : white;
  padding : 10px;
`
const selectStyles = css`
  border : 1px solid #eee;
  // height : 36px;
  border-radius : 10px;
  padding : 4px;
  &:focus : red;
  cursor : pointer;
  background : linear-gradient(to right,rgb(196,173,141) 0%,rgb(179,157,128) 34.48%, rgb(153,133,108) 100%);
  color : white;

  option {
    color : black;
  }
`