
import { CarouselOption } from '@/components/home/Carousel';
import { getPopulationHotel, getRecommandHotels } from '@/remote/hotel';
import { lazy } from 'react'
import { useNavigate } from 'react-router-dom';

const CarouselHotels = lazy(()=>import('@/components/home/Carousel'));
const SearchBar = lazy(()=>import('@/components/home/SearchBar'));
const Avatar = lazy(()=>import('@/components/home/Avatar'));

const carouselOptions = {
  recommand : {
    queryKey : ["recommand"],
    queryFn : () => getRecommandHotels(),
    title : "추천 호텔",
    mode : "recommand",
  },
  popular : {
    queryKey : ["popularCarousel"],
    queryFn : () => getPopulationHotel(),
    title : "인기 호텔",
    mode : "popular"
  }
} as { [key : string ] : CarouselOption }

export default function Home() {

  const navigate = useNavigate();

  const handleSearchContainer = () => {
    navigate("/search");
  }

  return (
    <div >
      {/* <AboveContainer> */}
        <Avatar />
        <SearchBar onClick = {handleSearchContainer}/>
      {/* </AboveContainer> */}
        <CarouselHotels options={carouselOptions.recommand}/>
        <CarouselHotels options={carouselOptions.popular}/>
    </div>
  )
}
