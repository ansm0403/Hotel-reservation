
import HotelFormAddButton from '@/components/test/HotelFormAddButton'
import HotelListAddButton from '@/components/test/HotelListAddButton'
import HotelsAddButton from '@/components/test/HotelsAddButton'
import RecommendHotelButton from '@/components/test/RecommandHotelButton'
import React from 'react'

export default function TestPage() {
  return (
    <div>
        <HotelListAddButton />
        <RecommendHotelButton />
        <HotelFormAddButton />
        <HotelsAddButton />
    </div>
  )
}
