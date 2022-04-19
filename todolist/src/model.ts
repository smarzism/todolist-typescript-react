export interface Todo {
  id: number
  todo: string
  isDone: boolean
}

export type Action =
  | {
      type: "add"
      payload: string
    }
  | {
      type: "remove" | "done" | "undone"
      payload: number
    }
  | { type: "edit"; payload: { id: number; todo: string } }

export function todoReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), todo: action.payload, isDone: false }]

    case "remove":
      return state.filter((t) => t.id !== action.payload)

    case "done":
      return state.map((t) =>
        t.id === action.payload ? { ...t, isDone: true } : t
      )
    case "undone":
      return state.map((t) =>
        t.id === action.payload ? { ...t, isDone: false } : t
      )
    case "edit":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, todo: action.payload.todo } : t
      )
  }
}
