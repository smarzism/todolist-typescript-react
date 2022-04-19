import React, { useState, useRef, useEffect } from "react"
import { AiFillEdit, AiFillDelete, AiOutlineUndo } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { GrLinkNext } from "react-icons/gr"
import { Action, Todo, todoReducer } from "../model"
import "./styles.css"
interface singleTodoPropsType {
  key: number
  todo: Todo
  todos: Todo[]
  dispatch: React.Dispatch<Action>
}
const SingleTodo = ({ todo, dispatch }: singleTodoPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [edit, setEdit] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)

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

          <GrLinkNext
            onClick={(e) => {
              e.preventDefault()
              edit &&
                dispatch({ type: "edit", payload: { id: todo.id, todo: edit } })
              setEditMode(false)
            }}
          />
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
              {!todo.isDone && <AiFillEdit onClick={() => setEditMode(true)} />}
              <AiFillDelete
                onClick={() =>
                  dispatch({
                    type: `remove ${todo.isDone ? "completed" : "uncompleted"}`,
                    payload: todo.id,
                  })
                }
              />
              {todo.isDone ? (
                <AiOutlineUndo
                  onClick={() => dispatch({ type: "undone", payload: todo })}
                />
              ) : (
                <MdDone
                  onClick={() => dispatch({ type: "done", payload: todo })}
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
