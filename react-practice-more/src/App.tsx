import styled, { keyframes } from "styled-components"

const Title = styled.h1`
  display: flex;
  justify-content: 50px;
  align-items: 50pxd;
  color: ${(props) => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`

function App() {
  return (
    <Wrapper>
      <Title>HIHI</Title>
    </Wrapper>
  )
}

export default App
