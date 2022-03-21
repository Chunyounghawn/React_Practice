import { useState } from "react"
import { useLocation, useParams } from "react-router"
import styled from "styled-components"

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`
const Loader = styled.div`
  text-align: center;
`

interface RouteState {
  state: {
    name: string
  }
}

interface RouteParams {
  coinId: string
}

function Coin() {
  const [loading, setLoading] = useState(true)
  const { coinId } = useParams<RouteParams>()
  const { state } = useLocation() as RouteState

  return (
    <Container>
      <Header>
        <Title>코인 {coinId}</Title>
      </Header>
      {loading ? <Loader>Loading</Loader> : null}
    </Container>
  )
}

export default Coin
