import React from "react"
import { Todo } from "../model"
import SingleTodo from "./SingleTodo"
interface todoListPropsType {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({ todos, setTodos }: todoListPropsType) => {
  return (
    <div>
      {todos.map((t) => (
        <SingleTodo todo={t} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList
