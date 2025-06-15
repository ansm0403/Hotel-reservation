
# JAPAN HOTEL RESERVATION
<br>

## 프로젝트 소개

일본 주요 지역 호텔의 정보들과 예약이 가능한 어플리케이션입니다. 

네이버에서 미용실을 예약하는 도중에 이 예약이란 것은 어떤 로직과 상태로 구성되며, 생각보다 구현이 어려울 것 같다는 생각에 만들어보게 되었습니다.

---
## 개발자 소개

<br>

* 안상문 : 프론트엔드, 백엔드
  
<br>

## 기술 스택

### Enviornment

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
 ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
 ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Development

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)


### Config

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
  
<br>

## 주요 기능

* 호텔 정보 (별점, 지도, 사진) <br>
* 댓글 및 찜목록 <br>
* 호텔 예약 <br>

## 실행 결과



## 실행 방법

> https://hotels-app-sage.vercel.app <br>


## 개선점

#### 지연로딩으로 캐러셀 최적화

1. 초기화면의 추천 호텔 캐러셀에는 총 `20`개의 호텔리스트가 들어있습니다.
2. 하지만 모바일 기준 2개의 호텔만 캐러셀에 드러났기 때문에 나머지 `18`개의 데이터를 미리 가져올 필요가 없었습니다.
3. LazyLoadImage 컴포넌트로 보이지 않는 캐러셀의 이미지는 지연로딩하여 화면에 나타날때만 렌더링 되도록 최적화하였습니다.
4. 최적화의 결과로 `LCP`가 `2.1`초에서 `1.81`초로 감소하였습니다.
5. 하지만 캐러셀의 이미지를 자동으로 움직이도록 만들때에는 화면에 보이는 순간에 이미지가 로딩중인 모습이 계속해서 보입니다.
6. 그래서 위의 경우에는 스켈레톤 UI를 사용하는 등의 방법으로 사용자 경험을 신경써주거나, 이미지 전체를 미리 다운받아 놓는 것이 좋을 것 같습니다.

#### 큰 번들 사이즈

1. 번들 사이즈가 `4.7 MB` 나 되어, 번들을 다운받는 데에만 총 `1`초의 시간이 걸렸습니다.
2. 추천 호텔과, 인기 호텔을 스플리팅하고, 그리고 생각 외로 크기가 굉장히 큰 `React-icons` 도 추가로 스플리팅하였습니다.
3. 번들의 사이즈가 `1.5 MB` 까지 줄었으며 다운로드 시간이 `1`초에서 `0.3`초로 줄었습니다.
4. 추가로 LCP가 `1.81`에서 `1.48`까지 감소하였습니다. 

#### 호텔 상세페이지 intersection Observer 로 최적화

1. 호텔 상세페이지에는 많은 정보가 담겨있고 스크롤을 아래까지 내려야합니다.
2. 아래로 내린 곳에는 추천 호텔과 댓글 컴포넌트가 존재하는데, 이 컴포넌트들은 네트워크에 데이터를 요청합니다.
3. 위의 지연로딩과 마찬가지로 뷰포트에 들어올 때 서버에 요청을 하여 최적화를 수행합니다. 이때 `intersection Observer`를 통해 뷰포트에 들어올 때 `react-query` 의 `enabled` 를 `true` 로 만들어 데이터를 불러옵니다.
4. `LCP` 가 `1.90` 에서 `1.74` 로 감소하였습니다.
5. 하지만 스크롤을 내리면 데이터를 불러오면서 갑자기 스켈레톤 UI가 나타나는데 저는 단 한 번도 어플리케이션들을 사용하면서 이러한 경험을 해본 적이 없습니다.
6. 차라리 사용자 경험을 위해 이러한 부분을 지우고 최대한 많은 컴포넌트를 스플리팅하여 `LCP` 를 `1.60`까지 감소시켰습니다.

## 후기

예약을 구현하는 데에 어려움이 있었고 많은 데이터를 사용하는 어플리케이션이다보니 더욱 더 최적화에 힘을 써야했습니다. 
이 역시 좋은 경험이 되었고 아직 구현해보지 못한 예약 케이스에 대해 공부해봐야할 것 같습니다.


