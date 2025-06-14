import {
    parseISO,
    isSameDay,
    format,
    differenceInDays,
    addDays,
  } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker, DateRange } from 'react-day-picker'
import { colors } from '@styles/colorPalette'
import styled from '@emotion/styled'
// import "react-day-picker/style.css"
  
interface RangePickerProps {
    startDate?: string
    endDate?: string
    onChange: (dateRange: { from?: string; to?: string; nights: number }) => void
}
  
function RangePicker({ startDate, endDate, onChange }: RangePickerProps) {
    const today = new Date()
  
    const handleDayClick = (dateRange: DateRange | undefined) => {
      if (dateRange == null) {
        return
      }
      const { from, to } = dateRange
  
      // 1. 중복된 날짜
     
      if(from && to){
        onChange({
          from : undefined,
          to : undefined,
          nights : 0
        })
      }

      onChange({
        from: from != null ? format(from, 'yyyy-MM-dd') : undefined,
        to: to != null ? format(to, 'yyyy-MM-dd') : undefined,
        nights: from && to ? differenceInDays(to, from) : 0,
      })

      if (from && to && isSameDay(from, to)) {
        return
      }
    }
  
    const selected = {
      from: startDate !== undefined ? parseISO(startDate) : undefined,
      to: endDate !== undefined ? parseISO(endDate) : undefined,
    }
  
    return (
      <Container>
        <DayPicker
          mode="range"
          locale={ko}
          numberOfMonths={5}
          defaultMonth={today}
          onSelect={handleDayClick}
          selected={selected}
          disabled={{
            before: addDays(new Date(), 1),
          }}
        />
      </Container>
    )
}
  
const Container = styled.div`
    padding-bottom: 80px;

    .rdp-month {
      position: relative;
      width: 100%;
      text-align: center;
      padding: 60px 0px 30px;
    }
  
    .rdp-month_caption{
      position: absolute;
      top: 25px;
      left: 20px;
      color: ${colors.black};
      font-weight: bold;
    }
  
    .rdp-nav {
      display: none;
    }
  
    .rdp-month_grid {
      width: 100%;
    }
  
    .rdp-weekdays {
      font-size: 12px;
      height: 45px;
      color: ${colors.gray400};
      font-weight: bold;
    }
  
    .rdp-week {
      height: 45px;
    }
  
    .rdp-day_button {
      position: relative;
      width: 100%;
      line-height: 45px;
    }
  
    .rdp-disabled {
      color: ${colors.gray200};
    }
  

    .rdp-focused {
      background-color: ${colors.blue500};
    }

    .rdp-range_middle{
      background-color : ${colors.gray100};
    }

    .rdp-range_start,
    .rdp-range_end {
      background-color: ${colors.blue500};
      color: ${colors.white};
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
      background-color: ${colors.blue};
      content: '';
  }

  .rdp-outside {
      background-color : transparent;
  }

`
  
export default RangePicker