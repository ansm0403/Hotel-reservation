import { GrSettingsOption } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
import { navbarAtom } from "@/store/atom/navbar";
import { useRecoilValue } from "recoil";

export default function Navbar() {

  const navbarState = useRecoilValue(navbarAtom);

  if(!navbarState) return <></>;
  console.log("네브 : ", navbarState);

  return (
    <div 
      css = {containerStyles}
      style = {{
        background : "linear-gradient(to right,rgb(237,237,237), rgb(222,222,222)"
      }}
    >
      <div css = {contentsStyles}>
        <Link to = {"/"}>
          <IoHomeOutline size = {25}/>
        </Link>
        <Link to = {"/my"} >
          <CgProfile size = {25}/>
        </Link>
         <Link to = {"/settings"}>
          <GrSettingsOption size = {25}/>
        </Link>
      </div>
    </div>
  )
}

const containerStyles = css`
  color : black;
  position : fixed;
  opacity : 80%;
  padding : 3px;
  left : 50%;
  transform : translateX(-50%);
  bottom : 10px;
  border-radius : 20px;
  width : 80%;
  z-index : 99;
`
const contentsStyles = css`
  display : flex;
  justify-content : space-evenly;
  border-radius : 20px;
  background-color : white;
  padding : 15px;
`
