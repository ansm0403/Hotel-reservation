import { COLLECTIONS } from "@/constants";
import { Room } from "@/models/room";
import { store } from "@/remote/firebase";
import { getRooms } from "@/remote/room";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

export default function useRooms({hotelId} : {hotelId : string}){
    
    const client = useQueryClient();
    useEffect(()=>{
        const unsubscribe = onSnapshot(
            collection(doc(store, COLLECTIONS.HOTELS, hotelId), COLLECTIONS.ROOM),
            (snapshot)=>{
                const newRooms = snapshot.docs.map((doc)=>({
                    id : doc.id,
                    ...(doc.data() as Room)
                }))
                client.setQueryData(['rooms, hotelId'], newRooms)
            }
        )

        return () => {
            unsubscribe()
        }
    },[])
    
    return useQuery(['rooms', hotelId], ()=>getRooms(hotelId));
}