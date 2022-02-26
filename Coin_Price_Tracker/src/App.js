import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [myMoney, setMyMoney] = useState([])

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  function onChange(event) {
    setMyMoney(event.target.value)
  }

  return (
    <div>
      <h1>The Coins : {coins.length}</h1>
      <input
        onChange={onChange}
        value={myMoney}
        type="number"
        placeholder="write your USD"
      />

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} {coin.symbol} :{" "}
              {Math.round((myMoney / coin.quotes.USD.price) * 100) / 100}
              {"  개의 "}
              {coin.symbol}
              {" 구매가능!"}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
