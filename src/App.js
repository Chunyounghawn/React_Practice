import { useState, useEffect } from "react"

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setTodos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === "") {
      return
    }
    setToDo("")
    setTodos((currentArray) => [toDo, ...currentArray])
  }
  console.log(toDos)
  return (
    <div>
      <h1>my todos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write plz"
        />
        <button> Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
