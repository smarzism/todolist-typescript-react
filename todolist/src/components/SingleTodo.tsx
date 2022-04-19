import React, { useState, useRef, useEffect, useReducer } from "react"
import { AiFillEdit, AiFillDelete, AiOutlineUndo } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { GrLinkNext } from "react-icons/gr"
import { Todo } from "../model"
import "./styles.css"
interface singleTodoPropsType {
  key: number
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({
  key,
  todo,
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: singleTodoPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [edit, setEdit] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    edit && setTodos(todos.map((t) => (t.id === id ? { ...t, todo: edit } : t)))
    setEditMode(false)
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [editMode])

  return (
    <form className="todos__single">
      {editMode ? (
        <>
          <input
            ref={inputRef}
            defaultValue={todo.todo}
            onChange={(e) => setEdit(e.target.value)}
            className="todos__single--text"
          ></input>
          <span className="icon">
            <GrLinkNext onClick={(e) => handleEdit(e, todo.id)} />
          </span>
        </>
      ) : (
        <>
          {todo.isDone ? (
            <s className="todos__single--text"> {todo.todo}</s>
          ) : (
            <span className="todos__single--text"> {todo.todo}</span>
          )}
          <div>
            <span className="icon">
              <AiFillEdit onClick={() => setEditMode(true)} />
              <AiFillDelete
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              />
              {todo.isDone ? (
                <AiOutlineUndo
                  onClick={() => {
                    setCompletedTodos(
                      completedTodos.filter((t) => t.id !== todo.id)
                    )
                    setTodos([
                      ...todos,
                      { id: todo.id, todo: todo.todo, isDone: false },
                    ])
                  }}
                />
              ) : (
                <MdDone
                  onClick={() => {
                    setTodos(todos.filter((t) => t.id !== todo.id))
                    setCompletedTodos([
                      ...completedTodos,
                      { id: todo.id, todo: todo.todo, isDone: true },
                    ])
                  }}
                />
              )}
            </span>
          </div>
        </>
      )}
    </form>
  )
}

export default SingleTodo
