import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { RootState } from "./modules"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { darkTheme } from "./theme"

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
`

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
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
  font-size:50px;
  letter-spacing:5px;
}
a{ //a가 html에 <a herf 랑 같은거임
  text-decoration: none;
  color:inherit;
}
`

function App() {
  const onDragEnd = () => {}

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  <Draggable draggableId="first" index={0}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      ></Card>
                    )}
                  </Draggable>
                  <Draggable draggableId="second" index={1}>
                    {(magic) => (
                      <li ref={magic.innerRef} {...magic.draggableProps}>
                        <span {...magic.dragHandleProps}>💙</span>Two
                      </li>
                    )}
                  </Draggable>
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </ThemeProvider>
  )
}

export default App
