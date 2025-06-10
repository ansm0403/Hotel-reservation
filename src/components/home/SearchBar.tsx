import useDebounce from '@/hook/useDebounce';
import { searchAtom } from '@/store/atom/search';
import { css } from '@emotion/react'
import { ChangeEvent, lazy, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil';

const SearchIcons = lazy(()=>import("../icons/SearchIcons"));

export default function SearchBar({ onClick } : { onClick? : () => void}) {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery || "", 500);
  const setSearch = useSetRecoilState(searchAtom);

  useEffect(()=>{
    if(debouncedQuery == null || city == null){
      return;
    }
    setSearch({
      keyword : debouncedQuery,
      city
    })
  }, [debouncedQuery, city])

  const handleSelect = (e : ChangeEvent<HTMLSelectElement>) => {
    console.log("선택 : ", e.target.value);
    setCity(e.target.value);
  }

  const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("키워드 : ", searchQuery);
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
    margin-top : 60px;
    gap : 10px;
    justify-content : center;
    flex-direction : column;
    @media (min-width : 365px){
      flex-direction : row;
    }
`
const searchContainerStyles = css`
    width : 62%;
    padding : 3px;
    display : flex;
    flex-direction : column;
    background-color : white;
    border-radius : 20px;
    cursor : pointer;
`
const inputContainerStyles = css`
  display : flex;
  align-items : center;
`
const inputStyles = css`
  border : none;
  width : 100%;
`
const selectStyles = css`
  border : 1px solid #eee;
  height : 36px;
  border-radius : 20px;
  padding : 3px;
  &:focus : red;
  cursor : pointer;
  color : gray;

  option {
    color : black;
  }
`