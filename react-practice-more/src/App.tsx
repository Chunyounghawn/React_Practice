import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  background-
`
const H1 = styled.h1``

function App() {
  const [value, setValue] = useState("")

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event
    setValue(value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("hello", value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default App
