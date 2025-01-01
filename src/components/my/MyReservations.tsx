import React from 'react'
import useReservations from "@/components/reservation-list/hooks/useReservations";
import Flex from "@/components/shared/Flex";
import { css } from '@emotion/react'
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';


export default function Reservations() {

    const { data : reservations, isLoading } = useReservations();
    const navigate = useNavigate();


    if (reservations == null || isLoading === true) {
      return null
    }
  
    const handleButton = () => {
      navigate("/reservation/list")
    }

    return (
      <Container>
        <Flex css = {containerStyle} direction = "column">
          <p css = {reservationTitleStyle}>
            예약
            <span css = {reservationCountStyle}>{reservations.length}</span>
          </p>
          <ul>
            <Flex direction='row' align='center' justify = 'center' css = {contentsContainerStyle}>
            {
              reservations?.slice(0, 2).map(({hotel, reservation})=>{ 
                return (
                  <li key = {reservation.id}>
                    <Flex align="center" direction="column" style={{padding : "10px 0", gap : "10px"}}>
                      <img 
                        src = {hotel.mainImageUrl}
                        alt = "myPage-reservation"
                        width = {400}
                        css = {reservationImageStyle}
                      />
                      <h5 style = {{fontSize : "15px", fontWeight : "bold"}}>{hotel.name}</h5>
                      <p>{`${reservation.startDate} ~ ${reservation.endDate}`}</p>                  
                    </Flex>
                  </li>
                )}
              )
            }
            </Flex>
          </ul>
          <Button onClick={handleButton}>예약 내역 모두 보기</Button>
        </Flex>     
      </Container>                                    
  )
}
 
const Container = styled.div`
  display : flex;
  justify-content: center;
  margin : auto;
  max-width : 1200px;
  min-width : 350px;
  
`

const containerStyle = css`
  position : relative;
  background-color : white;
  border-radius : 20px;
  margin : 20px;
  top : 20px;
  padding : 20px;
  mix-width : 350px;
  box-sizing : border-box;
`

const contentsContainerStyle = css`
  gap : 20px;
  min-width : 350px;
  @media (max-width : 880px) {
    flex-direction : column;
  }
` 


const reservationTitleStyle = css`
  font-weight : bold;
  font-size : 20px;
  padding : 0 0 10px 0;
`

const reservationImageStyle = css`
  object-fit : cover;
  min-width : 300px;
`

const reservationCountStyle = css`
  padding-left : 10px;
  color : ${colors.blue}
`

