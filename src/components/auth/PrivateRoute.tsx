import useUser from '@/hook/auth/useUser'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useUser()

  if (user == null) {
    return <Navigate to="auth/signin" replace={true} />
  }

  return <>{children}</>
}

export default PrivateRoute