import React from "react"
import { Action, TodoTypes } from "../model"
import SingleTodo from "./SingleTodo"
import "./styles.css"
interface todoListPropsType {
  todos: TodoTypes
  dispatch: React.Dispatch<Action>
}
const TodoList = ({ todos, dispatch }: todoListPropsType) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.uncompleted.map((t, i) => (
          <SingleTodo
            key={i}
            todo={t}
            todos={todos.completed}
            dispatch={dispatch}
          />
        ))}
      </div>

      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.completed.map((t, i) => (
          <SingleTodo
            key={i}
            todo={t}
            todos={todos.uncompleted}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
