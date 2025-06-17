import { Timestamp } from "firebase/firestore"

function formatTime(ms: number) {
    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour
  
    const days = Math.floor(ms / day)
  
    // 핫딜 종료
    if (days < 0) {
      return ''
    }
  
    const 남은시간 = Math.floor((ms - days * day) / hour)
    const 남은분 = Math.floor((ms - days * day - 남은시간 * hour) / minute)
    const 남은초 = Math.floor(
      (ms - days * day - 남은시간 * hour - 남은분 * minute) / 1000,
    )
  
    const HH = `${남은시간}`.padStart(2, '0')
    const mm = `${남은분}`.padStart(2, '0')
    const SS = `${남은초}`.padStart(2, '0')
  
    return days > 0 ? `${days}일 ${HH}:${mm}:${SS}` : `${HH}:${mm}:${SS}`
  }
  
  export default formatTime


  // Firestore에서 가져온 데이터가 Timestamp 객체인지 확인해야 합니다. 
// typeof timestamp를 사용하여 데이터 타입을 확인해 볼 수 있습니다. 
// 만약 문자열이나 숫자로 되어 있다면, new Timestamp(seconds, nanoseconds) 와 같은 방식으로 변환해야 합니다.
export function formatTimestamp(timestamp : Timestamp){
  if (typeof timestamp === 'object' && timestamp !== null && timestamp.seconds !== undefined && timestamp.nanoseconds !== undefined) {
     // timestamp가 Firestore Timestamp 객체인 경우
      const date = timestamp.toDate();
      // date 사용 로직
      const year = date.getFullYear();
      const month = String(date.getMonth()+1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0')

      return `${year}년 ${month}월 ${day}일`
   } else if (typeof timestamp === 'string' || typeof timestamp === 'number') {
       // timestamp가 숫자 또는 문자열인 경우 Timestamp 객체로 변환
       const seconds = typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp;
       const date = new Timestamp(seconds, 0).toDate();
       // date 사용 로직
   } else {
     // timestamp가 Timestamp 객체가 아닌 경우 처리
     console.log("Invalid timestamp type:", typeof timestamp);
   }
}