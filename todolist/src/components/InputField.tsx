import { Action } from "../model"
import "./styles.css"

interface inputPropsType {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  dispatch: React.Dispatch<Action>
}
const InputField = ({ todo, setTodo, dispatch }: inputPropsType) => {
  return (
    <form action="" className="input">
      <input
        type="input"
        placeholder="enter task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="input_submit"
        onClick={(e) => {
          e.preventDefault()
          todo && dispatch({ type: "add", payload: todo })
          setTodo("")
        }}
        // onKeyPress={(e) => e.key === "Enter" && handleAdd}
      >
        Add
      </button>
    </form>
  )
}

export default InputField
