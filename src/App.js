import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react"

function Hello() {
  useEffect(() => {
    console.log("i'm here")
  }, [])
  return <h1>hihi</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((showing) => !showing)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App
