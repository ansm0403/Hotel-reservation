import { useParams } from 'react-router-dom'

import Top from '@shared/Top'
import useHotel from '@components/hotel/hooks/useHotel'
import Carousel from '@components/hotel/Carousel'
import Contents from '@components/hotel/Contents'
import Rooms from '@/components/hotel/Rooms'
import Map from '@/components/hotel/Map'
import RecommendHotels from '@/components/hotel/RecommandHotels'
import ActionButtons from '@/components/hotel/ActionButtons'
import Review from '@/components/hotel/Review'
import SEO from '@/components/shared/SEO'

function HotelPage() {
  const { id } = useParams() as { id: string }

  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  console.log("데이터 : ", data);

  const { name, comment, images, contents, location, recommendHotels } = data

  return (
    <div>
      <SEO title={name} description = {comment} image = {images[0]} />
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <ActionButtons hotel={data}/>
      <Rooms hotelId={id}/>
      <Contents contents={contents} />
      <Map location={location}/>
      <RecommendHotels recommendHotels={recommendHotels}/>
      <Review hotelId={id}/>
    </div>
  )
}

export default HotelPage