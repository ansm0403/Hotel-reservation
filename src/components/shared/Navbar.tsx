import { css } from '@emotion/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useCallback } from 'react'

import Flex from '@shared/Flex'
import Button from '@shared/Button'
import useUser from '@/hook/auth/useUser'
import { colors } from '@/styles/colorPalette'
import Spacing from './Spacing'
import { getAuth, signOut } from 'firebase/auth'


function Navbar() {
  const location = useLocation()
  const navigate = useNavigate();
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const user = useUser()

  const handleLogout = useCallback(() => {
    const auth = getAuth();
    signOut(auth);
    navigate('/');
  }, [navigate])

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Flex align="center">
          <Link to="/my">
            <img
              src={
                user.photoURL ??
                'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-128.png'
              }
              alt="유저의 이미지"
              width={40}
              height={40}
              style={{ borderRadius: '100%' }}
            />
          </Link>
          <Spacing size={4} direction="horizontal" />
          <Link to="/settings">
            <img
              src="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/settings-outline-64.png"
              width={40}
              height={40}
              alt=""
            />
          </Link>
          <Spacing size = {8} direction = "horizontal" />
          <Button
            onClick = {()=>handleLogout()}
          >
            로그아웃
          </Button>
        </Flex>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">Travel Hotels</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  font-weight : bold;
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default Navbar