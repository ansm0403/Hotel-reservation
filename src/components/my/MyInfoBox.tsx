import React from 'react'
import Flex from "@/components/shared/Flex";
import { css } from '@emotion/react'
import Button from '../shared/Button';
import Text from '../shared/Text';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import Spacing from '../shared/Spacing';
import Skeleton from '../shared/Skeleton';


interface MyInfoProps {
  title : string,
  count : number
  contents : React.ReactNode
  onClick? : () => void
  buttonLabel? : string
  handleButton? : () => void
  buttonDisabled? : boolean
}

export default function MyInfoBox({ 
  title, count, contents, onClick, buttonLabel, handleButton, buttonDisabled
} : MyInfoProps 
){
    return (
      <Container>
        <Flex css = {containerStyle} direction = "column">
          <p css = {reservationTitleStyle}>
            {title}
            <span css = {reservationCountStyle}>{count}</span>
          </p>
          <Spacing size = {10} />
          <ul>
            <Flex direction='row' align='center' justify = 'center' css = {contentsContainerStyle}>
            { 
              count === 0 
              ? <Text bold typography='t5' textAlign='center'>{title}이 없습니다.</Text>
              : contents 
            }
            </Flex>
          </ul>
          <Spacing size = {10} />
          {
            buttonLabel && 
            <Button disabled = {buttonDisabled} onClick={handleButton}>{buttonLabel}</Button>
          }
        </Flex>     
      </Container>                                    
  )
}
 
function MySkeleton(){
  return <Skeleton width={400} height = {338} />        
}

const Container = styled.div`
  max-width : 1200px;
  min-width : 300px;
`

const containerStyle = css`
  position : relative;
  background-color : white;
  border-radius : 20px;
  margin : 20px;
  top : 20px;
  padding : 20px;
  min-width : 300px;
  box-sizing : border-box;
  overflow : hidden;
`

const contentsContainerStyle = css`
  gap : 20px;
  @media (max-width : 880px) {
    flex-direction : column;
  }
` 

const reservationTitleStyle = css`
  font-weight : bold;
  font-size : 20px;
  padding : 0 0 10px 0;
`

const reservationCountStyle = css`
  padding-left : 10px;
  color : ${colors.blue}
`

MyInfoBox.Skeleton = MySkeleton;