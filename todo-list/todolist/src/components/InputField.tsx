import "./styles.css"
const InputField = () => {
  return (
    <form action="" className="input">
      <input type="input" placeholder="enter task" className="input__box" />
      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  )
}

export default InputField
