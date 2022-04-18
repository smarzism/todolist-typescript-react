import React from "react"
import { AiFillEdit, AiFillDelete, AiOutlineUndo } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { Todo } from "../model"
import "./styles.css"
interface singleTodoPropsType {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todos, setTodos }: singleTodoPropsType) => {
  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text"> {todo.todo}</s>
      ) : (
        <span className="todos__single--text"> {todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit />
          <AiFillDelete />
          {todo.isDone ? (
            <AiOutlineUndo
              onClick={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, isDone: false } : t
                  )
                )
              }
            />
          ) : (
            <MdDone
              onClick={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, isDone: true } : t
                  )
                )
              }
            />
          )}
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
