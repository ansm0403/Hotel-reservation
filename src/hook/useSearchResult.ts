import { getSearchHotels } from "@/remote/hotel"
import { useCallback } from "react"
import { useInfiniteQuery } from "react-query"

export default function useSearchHotels({
    keyword,
    city
} : {
    keyword? : string,
    city? : string
}) {
    const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
        ["search", keyword, city],
        ({ pageParam }) => getSearchHotels({ keyword, city, pageParam }),
        {
            getNextPageParam : (snapshot) => {
                return snapshot.lastVisible
            },
            enabled : (!!keyword || !!city)
        }
    )

    const loadMore = useCallback(()=>{
        if(hasNextPage === false || isFetching){
            return;
        }

        fetchNextPage()
    }, [fetchNextPage, hasNextPage, isFetching])

    const hotels = data?.pages.map(({item}) => item).flat()

    return { data : hotels, loadMore, isFetching, hasNextPage }
}
