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

const Emoji = styled.span`
  font-size: 10px;
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  top: 28px;
  left: 120px;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
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
      <Box bgcolor="blue">
        <Emoji as="p">😊</Emoji>
      </Box>
    </Wrapper>
  )
}

export default App
