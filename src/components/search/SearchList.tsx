import useSearchHotels from '@/hook/useSearchResult'
import { HOTEL_2 } from '@/models/hotel';
import { ReduxState } from '@/store';
import { lazy } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';

const SearchCard = lazy(()=>import("./SearchCard"));

export default function SearchList() {

  // const searchState = useRecoilValue(searchAtom);
  const searchState = useSelector((state : ReduxState) => state.searchQuery)

  const { data : hotels, hasNextPage, loadMore} = useSearchHotels({ 
    keyword : searchState?.keyword,
    city : searchState?.city
  })

  if(hotels == null) return <></>

  return (
    <div>
      <InfiniteScroll
        dataLength={hotels?.length ?? 0}
        hasMore={hasNextPage as boolean}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
      {
        hotels.map((data)=>{
          return(
            <SearchCard hotel = {data} key = {data.id} />
          )
        })
      }
      </InfiniteScroll>
    </div>
  )
}


const datas = [
  {
        id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    } as HOTEL_2,
  {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    } as HOTEL_2,
  {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    } as HOTEL_2,
  {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    } as HOTEL_2,
  {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
     {
    id : "0",
        name : "바이크 & 베드",
        city: "Osaka",
        price : 3300,
        location : {
          directions : "2.9km from city centre",
          pointGeolocation : {
            x : 135.5137671,
            y : 34.682678
          }
        },
        starRating : 9.2,
        cleanliness: 9.4,
        facilities: 9.3,
        security: 9,
        mainImageUrl : "https://pix8.agoda.net/hotelImages/2306875/-1/570fb93455e6a18101ddc2ed545986e9.jpg?ca=0&ce=1&s=1024x",
        images : [
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17102108050058169755.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17061912390053829173.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/230/2306875/2306875_17060514470053474025.jpg?ca=6&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/0b8ebd96f51c6c7165aed14194746f08.jpg?ca=0&ce=1&s=1024x",
            "https://pix8.agoda.net/hotelImages/2306875/-1/35eb9c9282eb1ffcf1953ac2a4bba2fb.jpg?ca=0&ce=1&s=1024x"
        ]
    }as HOTEL_2,
]