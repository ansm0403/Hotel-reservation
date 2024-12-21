
import { useEffect, useState } from 'react'
  
import ListRow from '@shared/ListRow'
import useEditLike from '@components/settings/like/hooks/useEditLike'
import {
    DragDropContext,
    Droppable,
    Draggable,
    DraggableProps,
    DropResult,
    DroppableProps,
  } from 'react-beautiful-dnd'
import FixedBottomButton from '@/components/shared/FixedBottomButton'
import { Virtuoso } from 'react-virtuoso'

  function LikePage() {
    const { data, isEdit, reorder, save } = useEditLike()
  
    const handleDragEndDrop = (result: DropResult) => {
      if (result.destination == null) {
        return
      }
  
      const from = result.source.index
      const to = result.destination?.index
  
      reorder(from, to)
    }
  
    return (
      <div>
        <DragDropContext onDragEnd={handleDragEndDrop}>
          <StrictModeDroppable droppableId="likes">
            {(droppableProps) => (
              <ul
                ref={droppableProps.innerRef}
                {...droppableProps.droppableProps}
              >
                <Virtuoso
                  useWindowScroll
                  increaseViewportBy={0}
                  itemContent = {(index, like)=>{
                    return(
                      <Draggable key={like.id} draggableId={like.id} index={index}>
                      {(draggableProps) => (
                        <li
                          ref={draggableProps.innerRef}
                          {...draggableProps.draggableProps}
                          {...draggableProps.dragHandleProps}
                        >
                          <ListRow
                            as="div"
                            contents={
                              <ListRow.Texts
                                title={like.order}
                                subTitle={like.hotelName}
                              />
                            }
                          />
                        </li>
                      )}
                    </Draggable>
                    )
                  }}
                  data = {data}
                ></Virtuoso>
              </ul>
            )}
          </StrictModeDroppable>
        </DragDropContext>
  
        {isEdit ? <FixedBottomButton label="저장하기" onClick={save} /> : null}
      </div>
    )
  }
  
  function StrictModeDroppable({ children, ...props }: DroppableProps) {
    const [enabled, setEnabled] = useState(false)
  
    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true))
  
      return () => {
        cancelAnimationFrame(animation)
        setEnabled(false)
      }
    }, [])
  
    if (enabled === false) {
      return null
    }
  
    return <Droppable {...props}>{children}</Droppable>
  }
  
  export default LikePage