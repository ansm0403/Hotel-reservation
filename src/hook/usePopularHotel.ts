import { getPopulationHotels } from "@/remote/hotel";
import { useCallback } from "react";
import { useInfiniteQuery } from "react-query";

export default function usePopularHotel(){
    const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey : ["popular"],
        queryFn : ({pageParam}) => getPopulationHotels({pageParam}),
        getNextPageParam : (snapshot) => {
            return snapshot.lastVisible
        }
    })

    const loadMore = useCallback(()=>{
        if(hasNextPage === false || isFetching) return;

        fetchNextPage() 
    },[fetchNextPage, hasNextPage, isFetching])

    const hotels = data?.pages.map(({item}) => item).flat();

    return { data : hotels, loadMore, isFetching, hasNextPage }
}
