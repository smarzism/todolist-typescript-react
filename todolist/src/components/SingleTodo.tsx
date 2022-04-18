import React from "react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { Todo } from "../model"
import "./styles.css"
interface singleTodoPropsType {
  todo: Todo
}
const SingleTodo = ({ todo }: singleTodoPropsType) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text"> {todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
          <AiFillDelete />
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
