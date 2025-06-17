
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
import { navbarAtom } from "@/store/atom/navbar";
import { useRecoilValue } from "recoil";
import { lazy } from "react";

const CalendarIcon = lazy(()=>import("../icons/CalendarIcon"));
const HomeIcon = lazy(()=>import("../icons/HomeIcon"));
const ProfileIcon = lazy(()=>import("../icons/ProfileIcon"));
const SettingIcon = lazy(()=>import('../icons/SettingIcon'));
const HeartIcon = lazy(()=>import('../icons/HeartIcon'));

export default function Navbar() {

  const navbarState = useRecoilValue(navbarAtom);

  if(!navbarState) return <></>;

  return (
    <div 
      css = {containerStyles}
      style = {{
        // background : "linear-gradient(to right,rgb(237,237,237), rgb(222,222,222)"
      }}
    >
      <div css = {contentsStyles}>
        <Link to = {"/"}>
          <HomeIcon size = "25px" />
        </Link>
        <Link to = {"/my"} >
          <ProfileIcon size = "25px" />
        </Link>
        <Link to = {"/reservation/list"} >
          <CalendarIcon size = "27px" />
        </Link>
        <Link to = {"/like/list"}>
          <HeartIcon size = "25px" />
        </Link>
         <Link to = {"/settings"}>
          <SettingIcon size = "25px" />
        </Link>
      </div>
    </div>
  )
}

const containerStyles = css`
  color : white;
  position : fixed;
  opacity : 80%;
  padding : 3px;
  left : 50%;
  transform : translateX(-50%);
  bottom : 10px;
  border-radius : 20px;
  width : 90%;
  z-index : 99;
`
const contentsStyles = css`
  display : flex;
  justify-content : space-evenly;
  border-radius : 20px;
  background : linear-gradient(to right,rgb(196,173,141) 0%,rgb(179,157,128) 34.48%, rgb(153,133,108) 100%);
  padding : 12px;
`
