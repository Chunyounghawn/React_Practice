import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react"

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((counter) => counter + 1)
  const onChange = (event) => setKeyword(event.target.value)

  console.log("run all time")

  useEffect(() => {
    console.log("call the api")
  }, [])

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword)
    }
  }, [keyword])

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Serach here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App
