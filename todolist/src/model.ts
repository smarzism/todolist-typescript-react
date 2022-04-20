export interface Todo {
  id: number
  todo: string
  isDone: boolean
}
export interface TodoTypes {
  completed: Todo[]
  uncompleted: Todo[]
}

export type Action =
  | {
      type: "add"
      payload: string
    }
  | {
      type: "remove completed" | "remove uncompleted"
      payload: number
    }
  | {
      type: "done" | "undone"
      payload: Todo
    }
  | { type: "edit"; payload: { id: number; todo: string } }

export function todoReducer(todosState: TodoTypes, action: Action): TodoTypes {
  switch (action.type) {
    case "add":
      return {
        completed: todosState.completed,
        uncompleted: [
          ...todosState.uncompleted,
          { id: Date.now(), todo: action.payload, isDone: false },
        ],
      }
    case "remove completed":
      return {
        uncompleted: todosState.uncompleted,
        completed: todosState.completed.filter((t) => t.id !== action.payload),
      }
    case "remove uncompleted":
      return {
        completed: todosState.completed,
        uncompleted: todosState.uncompleted.filter(
          (t) => t.id !== action.payload
        ),
      }

    case "done":
      return {
        completed: [
          ...todosState.completed,
          { ...action.payload, isDone: true },
        ],
        uncompleted: todosState.uncompleted.filter(
          (t) => t.id !== action.payload.id
        ),
      }

    case "undone":
      return {
        uncompleted: [
          ...todosState.uncompleted,
          { ...action.payload, isDone: false },
        ],
        completed: todosState.completed.filter(
          (t) => t.id !== action.payload.id
        ),
      }

    case "edit":
      return {
        completed: todosState.completed,
        uncompleted: todosState.uncompleted.map((t) =>
          t.id === action.payload.id ? { ...t, todo: action.payload.todo } : t
        ),
      }
  }
}
