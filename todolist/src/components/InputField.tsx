import "./styles.css"
interface propsType {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}
const InputField = ({ todo, setTodo, handleAdd }: propsType) => {
  return (
    <form action="" className="input">
      <input
        type="input"
        placeholder="enter task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit" onClick={handleAdd}>
        Add
      </button>
    </form>
  )
}

export default InputField
