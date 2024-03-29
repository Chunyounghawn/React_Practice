import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./modules"
import DragabbleCard from "./components/modules/DragabbleCard"

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd"
import { darkTheme } from "./theme"
import { change_dnd } from "./modules/toDos"
import { useReducer } from "react"
import Board from "./components/modules/Board"

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`

const GlobalStyle = createGlobalStyle`
//https://fonts.google.com
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
//-----위에는 resetCss 임포트하지않고 소스가져온것, 아래는 내가 추가한것----------
*{
  box-sizing: border-box;
}
body{
  font-weight: 300;
  font-family: 'League Gothic', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: black;
  line-height: 1.2;
  letter-spacing:5px;
}
a{ //a가 html에 <a herf 랑 같은거임
  text-decoration: none;
  color:inherit;
}
`

function App() {
  const dispatch = useDispatch()

  const toDos = useSelector((state: RootState) => state.toDos.default)
  //console.log(toDosInfo)

  const onDragEnd = (info: DropResult) => {
    //if (!destination) return
    //destination.index의 값이 undefined가 될수있으므로
    //타입스크립트가 뭐라하기전에 undefined면 리턴해버리기

    //dispatch(change_dnd(destination.index, draggableId, source.index))
    console.log(info)

    const { destination, draggableId, source } = info
    if (!destination) return

    //same board movement.
    dispatch(
      change_dnd(
        destination.droppableId,
        destination.index,
        draggableId,
        source.droppableId,
        source.index
      )
    )
    console.log("qqq")
    console.log(destination)

    //console.log("fff")
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </ThemeProvider>
  )
}

export default App
