import React from "react"
import { Action, Todo } from "../model"
import SingleTodo from "./SingleTodo"
interface todoListPropsType {
  todos: Todo[]
  dispatch: React.Dispatch<Action>
}
const TodoList = ({ todos, dispatch }: todoListPropsType) => {
  console.log(todos)
  return (
    <div>
      {todos.map((t) => (
        <SingleTodo todo={t} todos={todos} dispatch={dispatch} />
      ))}
    </div>
  )
}

export default TodoList
