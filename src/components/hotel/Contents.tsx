
import styled from '@emotion/styled'
import { typographyMap } from '@styles/typography'

function Contents({ 
  contents, images
}: { 
  contents: string,
  images : string[] 
}) {

  return (
    <Container>
      <h2>가까운 역 도보 5분! 위치만으로 여행객들에게 인기 있는 호텔 </h2>
      <ul>
        <li>역까지 도보 5분</li>
        <li>쇼핑을 즐기기 탁월한 위치 </li>
        <li>비교적 넓은 크기의 객실</li>
        <li>투숙객의 안전을 위한 보안 시스템 </li>
        <li>호텔 내 아름다운 정원과 휴게실 </li>
        
      </ul>
      <img src = {images[0]} />
      <h2>쇼핑과 식도락, 교통 모든 게 편리한 최적의 위치 </h2>
      <p>               
          호텔 인근에는 일본풍 주방용품을 구매할 수 있는 상점가와 
          다양한 먹거리가 있는 시장이 있으며, 
          시내 주요 장소를 도보 10분 이내에 이동할 수 있어 쇼핑과 식도락을 편리하게 즐길 수 있다. 
          게다가, 도보 5분 거리에는 주요 역이 있어 교통까지 편리한 호텔이다.   
      </p>
      <img src = {images[2]} />
      <h2>비교적 넓은 크기를 자랑하는 객실 </h2>
      <p>               
          객실은 23㎡ 이상으로 이루어져 있어 인근 호텔에 비해 비교적 넓은 크기를 자랑하며, 전 객실에는 에스프레소 머신, 휴대용 스피커 등이 마련되어 있어 투숙객들은 편리하게 이용할 수 있다. 또한, 객실 카드키가 있어야만 출입할 수 있는 보안 게이트가 마련되어 있어 철저한 보안성까지 자랑하는 호텔이다.  
      </p>      
      <img src = {images[3]} />
      <h2>아름다운 휴게실과 식당, 테라스 </h2>
      <p>               
          호텔 내에는 테라스가 돋보이는 휴게실이 마련되어 있으며, 이곳은 계절별로 색다른 분위기를 연출하여 투숙객들에게 포토 스팟이 될 정도로 인기 있는 장소이다.  
      </p>
      <img src = {images[4]} />
    </Container>
  )
}

const Container = styled.div`

  padding: 24px;
  ${typographyMap.t6};

  h2 {
    ${typographyMap.t4};
    font-weight: bold;
    margin: 18px 0;
  }

  ul {
    padding-inline-start: 20px;
    margin: 18px 0;
  }

  li {
    list-style-type: disc;
  }

  p {
    margin: 18px 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export default Contents
