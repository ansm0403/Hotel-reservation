import usePopularHotel from '@/hook/usePopularHotel';
import { css } from '@emotion/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PopulCard from './PopulCard';

export default function PopulHotelList() {

    const { data : hotels, hasNextPage, loadMore } = usePopularHotel();

    if(!hotels) return null;

    return (
        <div>
            <div css = {containerStyles}>
                <span className='title'>인기 호텔</span>
            </div>
            <div>
            <InfiniteScroll
                dataLength={hotels?.length ?? 0}
                hasMore={hasNextPage as boolean}
                loader={<></>}
                next={loadMore}
                scrollThreshold="100px"
            >
            {
                hotels.map((hotel)=>(
                    <PopulCard hotel = {hotel} key = {hotel.id} />
                ))
            }
            </InfiniteScroll>
            </div>
        </div>
    )
}

const containerStyles = css`
    font-weight : bold;
    font-size : 1.3rem;
    margin : 20px 30px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;


    .title {
        margin-top : 10px;
    }

    .view {
        color : rgb(179,157,128);
    }
`