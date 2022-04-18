import "./App.css"
import React, { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./model"
import TodoList from "./components/TodoList"
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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
