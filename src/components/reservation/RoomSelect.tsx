import { roomsAtom } from "@/store/atom/rooms"
import priceConvert from "@/utils/convert"
import { css } from "@emotion/react"
import { ChangeEvent, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil"

export default function RoomSelect({
    onChange
} : {
    onChange : (selected : string, roomIdx : number, roomId : string) => void
}) {
    const roomsState = useRecoilState(roomsAtom);
    const rooms = roomsState[0];

    const [searchParams] = useSearchParams();
    const price = Number(searchParams.get('yen') as string)

    useEffect(() => {
    if (!rooms || rooms?.length === 0) {
      window.history.back()
    }
  }, [rooms])

    const handleSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange(
            e.target.value, 
            e.target.selectedIndex, 
            e.target.options[e.target.selectedIndex].dataset.roomid as string
        );
    }

    return (
        <div css = {containerStyles}>
            <div className="title">방</div>
            <label>
                <select name = "rooms" onChange={handleSelect}>
                    <option value={undefined}>선택</option>
                    {
                        rooms?.map((room, index)=>(
                            <option 
                                key = {room.id}
                                value = {room.roomName}
                                data-roomIdx = {index}
                                data-roomId = {room.id}
                            >
                                {`${room.roomName} ${priceConvert(price, room.roomName)}원`}
                            </option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}
const containerStyles= css`
    padding : 20px;

    .title{
        font-size : 1.2rem;
        font-weight : bold;
        margin-bottom : 1rem;
    }
    
    select {
        width : 80%;
        border : 1px solid gray;
        padding : 2px;
        font-size : 1rem;
        color : gray;
        border-radius : 5px;
    }
`