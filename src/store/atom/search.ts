import { atom } from "recoil"

export interface SearchQuery {
  keyword : string
  city : string
}

export const searchAtom = atom<SearchQuery | null>({
  key : 'search',
  default : null,
})