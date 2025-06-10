import { COLLECTIONS } from '@/constants'
import { Room } from '@/models/room'
import { doc, getDocs, collection } from 'firebase/firestore'

import { store } from './firebase'


export async function getRooms(hotelId: string) {
  const snapshot = await getDocs(
    collection(doc(store, COLLECTIONS.HOTELS, hotelId), COLLECTIONS.ROOM),
  )

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Room),
  }))
}