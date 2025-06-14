import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { addDays, differenceInDays, format, isSameDay, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale/ko'
import React, { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

interface Selected {
 from: Date | undefined;
 to: Date | undefined;
}

export default function ReservDayPicker({
  from,
  to,
  onChange
} : {
  from : Date | undefined,
  to : Date | undefined,
  onChange : (dateRange : { from : Date | undefined, to : Date | undefined, nights : number}) => void
}) {
  const today = new Date();

  const handleDaySelect = (dateRange : DateRange | undefined) => {
    if(dateRange == null) return;

    const { from, to } = dateRange;

    if(from && to){
      onChange({
        from : undefined,
        to : undefined,
        nights : 0
      })
    }

    onChange({
      from : from != null ? parseISO(format(from, 'yyyy-MM-dd'), {
      }) : undefined,
      to : to != null ? parseISO(format(to, 'yyyy-MM-dd')) : undefined,
      nights : from && to ? differenceInDays(to, from) : 0
    })

    if (from && to && isSameDay(from, to)) {
        return
    } 
  }

  const selected = {
      from: from !== undefined ? from : undefined,
      to: to !== undefined ? to : undefined,
  }

  return (
    <Container>
      <DayPicker 
        mode = "range"
        required= {false}
        locale={ko}
        // numberOfMonths = {5}
        // defaultMonth={today}
        selected={selected}
        onSelect={handleDaySelect}
        // disabled={{
        //     before: addDays(new Date(), 1),
        // }}
      />
    </Container>
  )
}

const Container = styled.div`
  box-shadow: 2px 2px 2px rgba(141, 239, 238, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05);

  margin : 0 20px;
  margin-bottom : 20px;
  border-radius : 20px;

  .rdp-root{
    padding : 30px;
    margin-top : 50px;
    padding-bottom : 0px;
  }

  .rdp-month {
      position: relative;
      width: 100%;
      text-align: center;
      padding: 60px 0px 30px;
  }
  
  .rdp-month_caption{
      position: absolute;
      top: 25px;
      left: 50%;
      transform : translateX(-50%);
      color: gray;
      font-weight: bold;
  }
  
  // .rdp-nav {
  //   display: none;
  // }

  .rdp-nav{
    position : relative;
    top : 20px;
  }


  .rdp-button_previous{
    position : absolute;
    left : 0;
  }

  .rdp-button_next{
    position : absolute;
    right : 0;
  }
  .rdp-month_grid {
      width: 100%;
  }
  
  .rdp-weekdays {
      font-size: 12px;
      height: 45px;
      color: gray;
      font-weight: bold;
  }
  
    // .rdp-day_button {
    //   position: relative;
    //   width: 100%;
    //   line-height: 45px;
    // }
  
  .rdp-disabled {
      color: gray;
  }
  

  .rdp-focused {
      background-color: blue;
  }

  .rdp-range_middle{
      background-color : skyblue;
      color : white;
  }

  .rdp-range_start {
    border-top-left-radius : 20px;
    border-bottom-left-radius : 20px;
  }

  .rdp-range_end {
    border-top-right-radius : 20px;
    border-bottom-right-radius : 20px;
  }

  .rdp-range_start,
  .rdp-range_end {
    background-color: skyblue;
    color: white;
  }

  .rdp-day{
    padding : 10px;
  }

    .rdp-cell .rdp-day_range_start::after,
    .rdp-cell .rdp-day_range_end::after {
      z-index: -1;
      display: block;
      width: calc(100% - 1px);
      height: 45px;
      position: absolute;
      top: 50%;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: blue;
      content: '';
  }

  .rdp-outside {
      background-color : transparent;
  }
`
