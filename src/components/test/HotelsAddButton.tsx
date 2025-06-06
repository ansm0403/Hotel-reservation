'use client'

import { store } from '@/remote/firebase';
import { collection, doc, writeBatch } from 'firebase/firestore'
import React from 'react'
import Button from '../shared/Button'
import data from '@/mock/hotel.json';
import { COLLECTIONS } from '@/constants';
import { ROOMS } from '@/mock/data';

export default function HotelsAddButton() {

    const batch = writeBatch(store);

    const handleButtonClick = () => {
        const hotels = data.map((hotel)=>{
            return {
                name : hotel['hostel.name'],
                city : hotel['City'],
                price : hotel['price.from'],
                starRating : hotel['summary.score'],
                cleanliness : hotel['cleanliness'],
                security : hotel['security'],
                facilities : hotel['facilities'],
                location : {
                    directions : hotel['Distance'],
                    pointGeolocation : {
                        x : hotel['lon'],
                        y : hotel['lat']
                    }
                },
                mainImageUrl : hotel['mainImageUrl'],
                images : hotel['images'],
                recommand : hotel['recommand'] ? hotel['recommand'] : false,
                contents,
            }
        })
        
        hotels.forEach((hotel, index) => {
            const hotelDocRef = doc(collection(store, COLLECTIONS.HOTELS), index.toString())

            batch.set(hotelDocRef, hotel)

            ROOMS.forEach((room) => {
                const subDocRef = doc(collection(hotelDocRef, COLLECTIONS.ROOM))
                batch.set(subDocRef, room)
            })
        })
        batch.commit();
    }

    return (
        <Button onClick={handleButtonClick}>호텔 데이터 추가하기</Button>
    )
}

const contents = `
      ## 난바 역 도보 5분! 위치만으로 여행객들에게 인기 있는 호텔    
      - 난바 역 도보 5분    
      - 쇼핑을 즐기기 탁월한 위치    
      - 비교적 넓은 크기의 객실    
      - 투숙객의 안전을 위한 보안 시스템    
      - 호텔 내 아름다운 정원과 분수대        
      
      ![](https://www.japan-guide.com/g9/2007_alcove.jpg)        
      
      ## 쇼핑과 식도락, 교통 모든 게 편리한 오사카 최적의 위치        
      호텔 인근에는 일본풍 주방용품을 구매할 수 있는 센니치마에 도구야스지 상점가와 
      다양한 먹거리가 있는 구로몬 시장이 있으며, 
      도톤보리도 도보 10분 이내에 이동할 수 있어 쇼핑과 식도락을 편리하게 즐길 수 있다. 
      게다가, 도보 5분 거리에는 오사카 주요 역인 난바 역이 있어 교통까지 편리한 호텔이다.            
      
      ![](https://www.japan-guide.com/g9/2007_tsukeshoin.jpg)        
      
      ## 비교적 넓은 크기를 자랑하는 객실        
      객실은 23㎡ 이상으로 이루어져 있어 인근 호텔에 비해 비교적 넓은 크기를 자랑하며, 전 객실에는 에스프레소 머신, 휴대용 스피커 등이 마련되어 있어 투숙객들은 편리하게 이용할 수 있다. 또한, 객실 카드키가 있어야만 출입할 수 있는 보안 게이트가 마련되어 있어 철저한 보안성까지 자랑하는 호텔이다.        
      
      ![](https://www.touropia.com/gfx/b/2015/05/kiso_valley.jpg)        
      
      ## 아름다운 분수가 돋보이는 실내 정원        
      호텔 내에는 하얀 분수대가 돋보이는 실내 정원이 마련되어 있으며, 이곳은 계절별로 색다른 분위기를 연출하여 투숙객들에게 포토 스팟이 될 정도로 인기 있는 장소이다.        
      
      ![](https://www.touropia.com/gfx/b/2015/05/osaka.jpg)
`