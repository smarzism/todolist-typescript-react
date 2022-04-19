import React from "react"
import { Todo } from "../model"
import SingleTodo from "./SingleTodo"
import "./styles.css"
interface todoListPropsType {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: todoListPropsType) => {
  console.log("hi")
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((t, i) => (
          <SingleTodo
            key={i}
            todo={t}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        ))}
      </div>

      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {completedTodos.map((t, i) => (
          <SingleTodo
            key={i}
            todo={t}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
