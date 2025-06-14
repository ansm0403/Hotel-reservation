import { atom } from "recoil";

export interface Room {
    avaliableCount: number;
    basicInfo: {
        [key: string]: string | number;
    };
    imageUrl: string;
    price: number;
    refundable: boolean;
    roomName: string;
    id: string;
}

export const roomsAtom = atom<Room[] | null>({
    key : "rooms",
    default : null
})