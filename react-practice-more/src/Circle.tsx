import { useState } from "react"
import styled from "styled-components"

interface ContainerProps {
  bgColor: string
  borderColor: string
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`

interface CircleProps {
  bgColor: string
  borderColor?: string
}
function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number | string>()
  setCounter("aa")
  return <Container bgColor={bgColor} borderColor={borderColor ?? "blue"} />
}

export default Circle
