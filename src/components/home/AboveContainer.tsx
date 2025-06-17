import { css } from '@emotion/react'
import React from 'react'

export default function AboveContainer({
    height,
    children
} : {
    height? : string
    children : React.ReactNode
}) {
  return (
    <div 
        style = {{
            background : "linear-gradient(to right,rgb(196,173,141) 0%,rgb(179,157,128) 34.48%, rgb(153,133,108) 100%",
            height
        }}
        css = {containerStyles}>
        {children}
    </div>
  )
}

const containerStyles = css`
    width : 100%;
    height : 200px;
    display : inline-block;
    position : relative;
    top : 0;
`

// background : "linear-gradient(to left,rgb(20, 123, 240) 0%,rgba(23, 169, 223, 0.75) 34.48%, #00e2ed 100%"