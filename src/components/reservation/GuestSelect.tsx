import { css } from '@emotion/react'
import React, { ChangeEvent } from 'react'

export default function GuestSelect({
    onChange
} : {
    onChange : (selected : number | undefined , type : string) => void
}) {

    const handleSelect = (e : ChangeEvent<HTMLSelectElement>) => {
        if(!e.target.value) onChange(undefined, e.target.name)
        onChange(Number(e.target.value), e.target.name);
    }

  return (
    <div css = {containerStyles}>
        <div className='title'>인원</div>
        <div className='selects'>
            <label> 성인
                <select name = "adults" onChange={handleSelect}>
                    <option>선택</option>
                    <option value = {2}>2</option>
                    <option value = {3}>3</option>
                    <option value = {4}>4</option>
                    <option value = {5}>5</option>
                    <option value = {6}>6</option>
                </select>
            </label>
            <label> 어린이
                <select name = "children" onChange={handleSelect}>
                    <option>선택</option>
                    <option value = {1}>1</option>
                    <option value = {2}>2</option>
                    <option value = {3}>3</option>
                    <option value = {4}>4</option>
                </select>
            </label>
        </div>
    </div>
  )
}

const containerStyles= css`
    padding : 20px;

    .title{
        font-size : 1.2rem;
        font-weight : bold;
        margin-bottom : 1rem;
    }
    
    .selects {
        display : flex;
        gap : 3rem;
    }

    select {
        border : 1px solid gray;
        margin-left : 10px;
        padding : 2px;
        font-size : 1rem;
        color : gray;
        border-radius : 5px;
    }
`
