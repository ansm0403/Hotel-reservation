import useLike from '@/hook/like/useLike';
import React from 'react'

export default function MyLike() {

    const {data : likes} = useLike();

    console.log(likes); 

    return (
      <>
        zzz
      </>
    )
}
