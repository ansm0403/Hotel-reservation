
import { lazy } from 'react'
import { useNavigate } from 'react-router-dom';

const AboveContainer = lazy(()=>import('@/components/home/AboveContainer'));
const CarouselHotels = lazy(()=>import('@/components/home/Carousel'));
const SearchBar = lazy(()=>import('@/components/home/SearchBar'));

export default function Home() {

  const navigate = useNavigate();

  const handleSearchContainer = () => {
    navigate("/search");
  }

  return (
    <div>
      <AboveContainer>
        <SearchBar onClick = {handleSearchContainer}/>
        <CarouselHotels />
      </AboveContainer>
      {/* <PopulHotelList /> */}
    </div>
  )
}
