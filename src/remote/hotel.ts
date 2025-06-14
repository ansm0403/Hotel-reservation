import {
  QuerySnapshot,
  collection,
  limit,
  query,
  getDocs,
  startAfter,
  doc,
  getDoc,
  where,
  documentId,
  orderBy,
  Query,
  DocumentData,
} from 'firebase/firestore'

import { COLLECTIONS } from '@/constants'
import { Hotel, HOTEL_2 } from '@models/hotel'

import { store } from './firebase'
import { Room } from '@/models/room'

export async function getHotels(pageParams?: QuerySnapshot<Hotel>) {
  const hotelsQuery =
    pageParams == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParams),
          limit(10),
        )

  const hotelsSnapshot = await getDocs(hotelsQuery)

  const items = hotelsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  )

  const lastVisible = hotelsSnapshot.docs[hotelsSnapshot.docs.length - 1]

  return {
    items,
    lastVisible,
  }
}

export async function getHotel(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.HOTELS, id))

  return {
    id,
    ...snapshot.data(),
  } as HOTEL_2
}

export async function getRecommendHotels(hotelIds: string[]) {
  const recommendQuery = query(
    collection(store, COLLECTIONS.HOTELS),
    where(documentId(), 'in', hotelIds),
  )

  const snapshot = await getDocs(recommendQuery)

  return snapshot.docs.map(
    (doc) =>
      ({ id: doc.id, ...doc.data() }) as HOTEL_2,
  )
}

export async function getHotelWithRoom({
  hotelId,
  roomId,
}: {
  hotelId: string
  roomId: string
}) {
  const hotelSanpshot = await getDoc(doc(store, COLLECTIONS.HOTELS, hotelId))

  const roomSanpshot = await getDoc(doc(hotelSanpshot.ref, COLLECTIONS.ROOM, roomId))

  return {
    hotel: hotelSanpshot.data() as Hotel,
    room: roomSanpshot.data() as Room,
  }
}

export async function getRecommandHotels(){
  
  const hotelsQuery = query(
    collection(store, COLLECTIONS.HOTELS),
    where("recommand", "==", true),
    limit(5)
  )

  const hotelSnapshot = await getDocs(hotelsQuery);

  return hotelSnapshot.docs.map((doc)=>({
    id : doc.id,
    ...doc.data()
  }) as HOTEL_2)
}

export async function getPopulationHotels(){
  const hotelsQuery = query(
    collection(store, COLLECTIONS.HOTELS),
    orderBy("starRating", "desc"),
    limit(3)
  )

  const hotelSnapshot = await getDocs(hotelsQuery);

  return hotelSnapshot.docs.map((doc)=>({
    id : doc.id,
    ...doc.data()
  }) as HOTEL_2)
}

export async function getSearchHotels({ 
  keyword, city, pageParam
} : { 
  keyword? : string, city? : string, pageParam? : QuerySnapshot
}){

  let searchQuery;

  if(keyword?.length !== 0 && city?.length !== 0) {
    searchQuery = pageParam == null 
    ? query(
        collection(store, COLLECTIONS.HOTELS),
        where("name", ">=", keyword),
        where("name", "<=", keyword + '\uf8ff'),
        where("city", "==", city),
        limit(10)
    )
    : query(
        collection(store, COLLECTIONS.HOTELS),
        startAfter(pageParam),
        where("name", ">=", keyword),
        where("name", "<=", keyword + '\uf8ff'),
        where("city", "==", city),
        limit(10)
    )
  } else if(keyword?.length !== 0){
    searchQuery = pageParam == null 
    ? query(
        collection(store, COLLECTIONS.HOTELS),
        where("name", ">=", keyword),
        where("name", "<=", keyword + '\uf8ff'),
        limit(10)
     )
    : query(
        collection(store, COLLECTIONS.HOTELS),
        startAfter(pageParam),
        where("name", ">=", keyword),
        where("name", "<=", keyword + '\uf8ff'),
        limit(10)
    );
  } else if ( city?.length !== 0 ) {
    searchQuery = pageParam == null 
    ? query(
        collection(store, COLLECTIONS.HOTELS), 
        where("city", "==", city),
        limit(10)
    )
    : query(
        collection(store, COLLECTIONS.HOTELS),
        startAfter(pageParam),
        where("city", "==", city),
        limit(10)
    )
  }

  const snapshot = await getDocs(searchQuery as Query<DocumentData, DocumentData>);

  const item = snapshot.docs.map((doc)=>({
    id : doc.id,
    ...doc.data(),
  }) as HOTEL_2)

  const lastVisible = snapshot.docs[snapshot.docs.length - 1]

  return {
    item,
    lastVisible
  }
}