import MyLike from "@/components/my/MyLike";
import Reservations from "@/components/my/MyReservations";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";


export default function My() {
  return(
    <Container>
      <Reservations />
      <MyLike />
    </Container>
  )
}

const Container = styled.div`
  background-color : ${colors.gray200};
`