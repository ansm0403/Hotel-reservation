import { collection, writeBatch, getDocs, query, where } from 'firebase/firestore'

import { COLLECTIONS } from '@/constants'
import { store } from '@remote/firebase'
import Button from '@shared/Button'

export default function RecommendHotelButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)
    const snapshot = await getDocs(collection(store, COLLECTIONS.HOTELS))
    const totalCount = snapshot.size;

    snapshot.docs.forEach((hotel) => {
      const 추천호텔리스트 = []

      // for (let doc of snapshot.docs) {
      for(let i = 0; i < 5; i++){
        // if (추천호텔리스트.length === 5) {
        //   break
        // }
        const 추천호텔아이디 = getRecommandId(추천호텔리스트, totalCount);

        추천호텔리스트.push(추천호텔아이디?.toString() as string);

        // if (doc.id !== hotel.id) {
        //   추천호텔리스트.push(doc.id)
        // }
      }

      batch.update(hotel.ref, {
        recommendHotels: 추천호텔리스트,
      })
    })

    await batch.commit()

    alert('업데이트가 완료되었습니다.')
  }

  return <Button onClick={handleButtonClick}>추천호텔 데이터 추가하기</Button>
}

function getRecommandId(prev : string[], totalCount : number){
  let isDuplic : boolean = true
  let randomId;

  while(isDuplic){
    randomId = Math.floor(Math.random() * totalCount);
    isDuplic = prev.includes(randomId.toString());
  }

  return randomId;
};