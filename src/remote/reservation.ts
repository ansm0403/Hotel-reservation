import {
    collection,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    query,
    where,
    getDocs,
    deleteDoc,
  } from 'firebase/firestore'
import { COLLECTIONS } from '@/constants'
import { store } from './firebase'
import { getHotel } from './hotel'
  
import { Reservation, ReservationSnapshot } from '@models/reservation'
import { Room } from '@models/room'
  
export async function makeReservation(newReservation: Reservation) {
    const hotelSnapshot = doc(store, COLLECTIONS.HOTELS, newReservation.hotelId)
    const roomSnapshot = await getDoc(
      doc(hotelSnapshot, COLLECTIONS.ROOM, newReservation.roomId),
    )
  
    const room = roomSnapshot.data() as Room
    const 지금잔여객실수 = room.avaliableCount
  
    if (지금잔여객실수 === 0) {
      throw new Error('no room')
    }
  
    return Promise.all([
      updateDoc(roomSnapshot.ref, {
        avaliableCount: 지금잔여객실수 - 1,
      }),
      setDoc(doc(collection(store, COLLECTIONS.RESERVATION)), newReservation),
    ])
}
  
export async function  getReservations({ userId }: { userId: string }) {
    const reservationQuery = query(
      collection(store, COLLECTIONS.RESERVATION),
      where('userId', '==', userId),
    )
  
    const reservationSnapshot = await getDocs(reservationQuery)
  
    const result = []
  
    for (const reservationDoc of reservationSnapshot.docs) {
      const reservation = {
        id: reservationDoc.id,
        ...(reservationDoc.data() as ReservationSnapshot),
      }
  
      const hotel  = await getHotel(reservation.hotelId)
  
      result.push({
        reservation,
        hotel,
      })
    }
  
  return result
}

export async function removeReservation({ 
  hotelId, reservId, roomId
} : { 
  hotelId : string
  reservId : string
  roomId : string
}){
  const hotelSnapshot = doc(store, COLLECTIONS.HOTELS, hotelId);
  const roomSnapshot = await getDoc(doc(hotelSnapshot, COLLECTIONS.ROOM, roomId))

  const room = roomSnapshot.data() as Room
  
  const restRoom = room.avaliableCount;

  return Promise.all([
    deleteDoc(doc(store, COLLECTIONS.RESERVATION, reservId)),
    updateDoc(roomSnapshot.ref, {
      avaliableCount: restRoom + 1,
    })
  ]);
  
}