import { BookingData } from "@/pages/BookingPage";
import { atom } from "recoil";

export const bookingAtom = atom<BookingData | null>({
    key : "booking",
    default : null
})