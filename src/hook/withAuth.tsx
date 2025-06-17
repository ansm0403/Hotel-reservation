

// import { getAuth } from 'firebase/auth';
// import { ComponentType } from 'react'
// import { useNavigate } from 'react-router-dom';

// function withAuth<Props = Record<string, never>>(
//   WrappedComponent: ComponentType<Props>,
// ) {
//   return function AuthenticatedComponent(props: Props) {

//     const { auth } = getAuth();
//     const navigate = useNavigate();

//     if(status !== 'loading' && data == null) {
//         navigate('/auth/signin');
//         return null;
//     }

//     return <WrappedComponent {...(props as any)} />
//   }
// }

// export default withAuth

import React from 'react'

export default function withAuth() {
  return (
    <div>withAuth</div>
  )
}
