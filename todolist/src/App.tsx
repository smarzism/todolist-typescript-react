import "./App.css"
import React, { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./model"
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    todo && setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
    setTodo("")
  }
  return (
    <div className="App">
      <span className="header">todo List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <div>{t.todo}</div>
      ))}
    </div>
  )
}

export default App
