import { Link } from 'react-router-dom'
import ListRow from '@shared/ListRow'
import useGoogleSignin from '@/hook/useGoogleSignin'
import { useAlertContext } from '@/contexts/AlertContext';

function SettingsPage() {

  const { signout } = useGoogleSignin();
  const { open, close } = useAlertContext();

  const handleSignOut = () => {
    open({
      title : "로그아웃 하시겠습니까?",
      onButtonClick : () => {
        signout();
      }
    })
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="/settings/like">
            <ListRow
              as="div"
              contents={
                <ListRow.Texts title="찜하기" subTitle="찜한 호텔 순서 변경" />
              }
              withArrow={true}
            />
          </Link>
        </li>
        <li>
          <Link to="/like/list">
            <ListRow
              as="div"
              contents={
                <ListRow.Texts title="찜 목록" subTitle="찜 목록으로 이동하기" />
              }
              withArrow={true}
            />
          </Link>
        </li>
        <li>
          <Link to="/reservation/list">
            <ListRow
              as="div"
              contents={
                <ListRow.Texts title="예약 목록" subTitle="예약 목록으로 이동하기" />
              }
              withArrow={true}
            />
          </Link>
        </li>
        <li>
          <div onClick={e => handleSignOut()}>
            <ListRow
              as="div"
              contents={
                <ListRow.Texts title="로그아웃" subTitle="로그아웃하기" />
              }
              withArrow={true}
            />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SettingsPage