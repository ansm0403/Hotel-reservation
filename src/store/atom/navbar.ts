import { atom } from "recoil";

export const navbarAtom = atom<boolean>({
    key : 'navbar',
    default : true
});