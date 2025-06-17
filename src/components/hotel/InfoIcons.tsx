import { HOTEL_2 } from "@/models/hotel"
import styled from "@emotion/styled"
import { lazy, ReactElement, useState } from "react"

const AtmosIcon = lazy(()=>import("../icons/AtmosIcon"))
const CleanIcon = lazy(()=>import("../icons/CleanIcon"))
const ConveniIcon = lazy(()=>import("../icons/ConveniIcon"))
const SecurityIcon = lazy(()=>import("../icons/SecurityIcon"))

export default function InfoIcons({
    hotel
} : {
    hotel : HOTEL_2
}) {

    const [ atmosphere, setAtmosphere ] = useState<number | string>(((Math.random()*6) + 4).toFixed(1));

    return (
        <Container>
            <Contents 
                score = {hotel.cleanliness} 
                Icon = {<CleanIcon size = "30"/>}
            />
            <Contents 
                score = {hotel.facilities} 
                Icon = {<ConveniIcon size = "30"/>}
            />
            <Contents 
                score = {hotel.security} 
                Icon = { <SecurityIcon size = "30"/>}
            />
            <Contents 
                score = {atmosphere}  
                Icon = {<AtmosIcon size = "30"/>}
            />
        </Container>
    )
}

const Container = styled.div`
    background : rgba(0, 0, 0, 5%);
    margin : 0 40px;
    border-radius : 20px;
    display : flex;
    justify-content : space-around;
    gap : 10px;
    padding : 10px 40px;
`
function Contents({
    score,
    Icon
} : {
    score: number | string,
    Icon : ReactElement<any, any>
}){
    return (
        <ContentsContainer>
            { Icon }
            { score }
        </ContentsContainer>
    )
}

const ContentsContainer = styled.div`
    display : flex;
    flex-direction : column;
    text-align : center;
    gap : 3px;
`