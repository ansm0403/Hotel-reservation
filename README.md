
# JAPAN HOTEL RESERVATION
<br>

## 프로젝트 소개

일본 주요 지역 호텔의 정보들과 예약이 가능한 어플리케이션입니다

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
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)


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

#### intersection Observer 로 로딩속도 최적화

## 후기

예약을 구현하는 데에 어려움이 있었고 많은 데이터를 사용하는 어플리케이션이다보니 더욱 더 최적화에 힘을 써야했습니다. 
이 역시 좋은 경험이 되었고 아직 구현해보지 못한 예약 케이스에 대해 공부해봐야할 것 같습니다.


