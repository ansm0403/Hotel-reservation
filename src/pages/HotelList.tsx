// import InfiniteScroll from 'react-infinite-scroll-component'
// import Top from '@shared/Top'
// import HotelItem from '@/components/hotelList/HotelItem'
// import { Fragment } from 'react'
// import Spacing from '@shared/Spacing'
import useLike from '@/hook/like/useLike'
import useHotels from '@/components/hotelList/hook/useHotels'
// import Carousel from '@/components/home/Carousel'

function HotelList() {
  const { data: hotels, hasNextPage, loadMore } = useHotels()
  const { data: likes, mutate: like } = useLike()

  return (
    <div>
      {/* <Carousel />
      <Top title="인기 호텔" subTitle="호텔부터 펜션까지 최저가" />

      <InfiniteScroll
        dataLength={hotels?.length ?? 0}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {hotels?.map((hotel, idx) => (
            <Fragment key={hotel.id}>
              <HotelItem
                hotel={hotel}
                isLike={Boolean(
                  likes?.find((like) => like.hotelId === hotel.id),
                )}
                onLike={like}
              />
              {hotels.length - 1 === idx ? null : (
                <Spacing
                  size={8}
                  backgroundColor="gray100"
                  style={{ margin: '20px 0' }}
                />
              )}
            </Fragment>
          ))}
        </ul>
      </InfiniteScroll> */}
    </div>
  )
}

export default HotelList