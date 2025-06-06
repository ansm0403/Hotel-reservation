import { getPopulationHotels } from '@/remote/hotel'
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import PopulCard from './PopulCard';

export default function PopulHotelList() {

    const { data : hotels } = useQuery({
        queryKey : ["populhotels"],
        queryFn : () => getPopulationHotels(),
    })

    if(!hotels) return null;

    return (
        <div>
            <div css = {containerStyles}>인기 호텔</div>
            {
                hotels.map((hotel)=>(
                    <PopulCard hotel = {hotel} />
                ))
            }
        </div>
    )
}

const containerStyles = css`
    font-weight : bold;
    font-size : 1.3rem;
    margin : 20px 30px;
    display : flex;
    flex-direction : row;
`