import { useQuery } from 'react-query'
import { getRecommendHotels } from '@remote/hotel'

function useRecommendHotels({ 
  hotelIds,
  inView
}: { 
  hotelIds: string[] 
  inView? : boolean
}) {
  return useQuery(
    ['recommendHotels', JSON.stringify(hotelIds)],
    () => getRecommendHotels(hotelIds),
    {
      enabled: inView 
    },
  )
}

export default useRecommendHotels