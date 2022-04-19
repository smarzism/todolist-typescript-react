import "./App.css"
import React, { useReducer, useState } from "react"
import InputField from "./components/InputField"
import { todoReducer } from "./model"
import TodoList from "./components/MyTodoList"
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todosState, dispatch] = useReducer(todoReducer, [])

  return (
    <div className="App">
      <span className="header">todo List</span>
      <InputField todo={todo} setTodo={setTodo} dispatch={dispatch} />
      <TodoList todos={todosState} dispatch={dispatch} />
    </div>
  )
}

export default App
