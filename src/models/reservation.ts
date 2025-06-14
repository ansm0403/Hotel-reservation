import { Timestamp } from "firebase/firestore"

export interface Reservation {
    userId: string
    hotelId: string
    roomId: string
    startDate: Date | undefined
    endDate: Date | undefined
    price: number
    formValues: {
      [key: string]: string
    }
  }
export interface ReservationSnapshot {
    userId: string
    hotelId: string
    roomId: string
    startDate: Timestamp
    endDate: Timestamp
    price: number
    formValues: {
      [key: string]: string
    }
  }