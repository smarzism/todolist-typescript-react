import React from "react"
import { Droppable } from "react-beautiful-dnd"
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
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((t, i) => (
              <SingleTodo
                index={i}
                todo={t}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodoRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((t, i) => (
              <SingleTodo
                index={i}
                todo={t}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList
