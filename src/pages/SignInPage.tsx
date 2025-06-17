import React, { useEffect } from 'react'
import useGoogleSignin from '../hook/useGoogleSignin'
import Spacing from '../components/shared/Spacing'
import Button from '../components/shared/Button'
import Flex from '../components/shared/Flex'
import { useSetRecoilState } from 'recoil'
import { navbarAtom } from '@/store/atom/navbar'

function SigninPage() {
  const { signin } = useGoogleSignin()

  const setNavbarState = useSetRecoilState(navbarAtom);

  useEffect(()=>{
    setNavbarState(false);

    return () => setNavbarState(true);
  },[])

  return (
    <Flex direction="column" align="center" style={{ padding: 24 }}>
      <Spacing size={10} />
      <div style = {{borderRadius : "20px", overflow : "hidden" }}>
        <img
            src="/images/main.jpg"
            alt=""
            width={370}
            height={550}
            style = {{
                objectFit : "cover"
            }}
        />
      </div>
      <Spacing size={60} />
      <div style = {{
        fontWeight : "bold",
        fontSize : "1.2rem"
      }}>
        지금 바로 당신의 완벽한 휴가를 예약하세요
      </div>
      <Spacing size = {30} />
      <div>
        최저가 보장! 지금 예약하고 특별한 혜택을 누리세요.
        <Spacing size = {5} />
        여행의 설렘을 현실로, 특별한 순간을 만들어 드립니다.
      </div>
      <Spacing size={90} />
      <button 
        onClick={signin} 
        style = {{
            width : "370px",
            height : "60px",
            borderRadius : "10px",
            boxShadow : "2px 2px 2px rgba(170, 181, 181, 0.36), 0 1px 1px rgba(0, 0, 0, 0.05)",
        }}
    >
        <Flex align="center" justify="center">
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-64.png"
            alt=""
            width={20}
            height={20}
          />
          <Spacing direction="horizontal" size={4} />
          Google 로그인
        </Flex>
      </button>
    </Flex>
  )
}

export default SigninPage