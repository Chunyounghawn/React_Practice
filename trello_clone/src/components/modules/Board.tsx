import { Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
import DragabbleCard from "./DragabbleCard"

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  min-g
`
interface Iboardprops {
  toDos: string[]
  boardId: string
}

function Board({ toDos, boardId }: Iboardprops) {
  return(
  <Droppable droppableId={boardId}>
    {(magic) => (
      <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
        {toDos.map((toDo, index) => (
          <DragabbleCard key={toDo} toDo={toDo} index={index} />
        ))}
        {magic.placeholder}
      </Wrapper>
    )}
  </Droppable>
  )
}
export default Board
