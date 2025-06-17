import useUser from '@/hook/auth/useUser'
import styled from '@emotion/styled'

export default function Avatar() {

    const user = useUser();

    return (
        <Container>
            <span className='title'>
                <span className='name'>{user?.displayName}</span>{` 님의 여행을 환영합니다.` }   
            </span>
            <AvatarContainer>
                <img 
                    src = {user?.photoURL} alt = "유저"
                    width={50}
                    height={50}
                />
            </AvatarContainer>
        </Container>
    )
}
const Container = styled.div`
    display : flex;
    position : relative;
    flex-direction : row;
    items-align : center;

    .title {
        position : relative;
        top : 40px;
        left : 30px;
        font-size : 1.2rem;

        .name {
            color : rgb(179,157,128);
            font-weight : bold;
        }
    }
`

const AvatarContainer = styled.div`
    position : absolute;
    width : 50px;
    height : 50px;
    top : 15px;
    left : 80%;
    border-radius : 100%;
    overflow : hidden;
    border : 1.5px solid rgb(179,157,128);
    .img {
        object-fit : contain;
    }
`