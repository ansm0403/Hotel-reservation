export default function priceConvert(price : number, roomName : string){
  if(roomName === "싱글 룸") return price * 10;
  if(roomName === "더블 룸") return (price + (price * 0.5)) * 10
  if(roomName === "트윈 룸, 여성 전용, 금연") return (price + (price * 0.75)) * 10
  else return price * 10;
}

export function convertCity(city : string){
    switch(city){
        case "Osaka" : return "오사카"
        case "Fukuoka" : return "후쿠오카"
        case "Tokyo" : return "도쿄"
        case "Kyoto" : return "교토"
        default : return ""
    }
}