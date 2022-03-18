import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
  display: flex;
`
const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }

`

const Box = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  top: 28px;
  left: 120px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 30px;
    &:hover {
      //& = span
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  )
}

export default App
