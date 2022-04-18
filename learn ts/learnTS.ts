export {}
let msg = "hiyy"
console.log(msg)

let p1: [string, number] = ["sss", 5]
// ------------------------------------------------------------------- enum
enum Color {
  Red = 4,
  Green,
  Blue,
}
// ------------------------------------------------------------------- any
let rand: any = 22
rand = "sfsd"
rand.name
rand = () => {}
rand.toUpperCase
// -------------------------------------------------------------------
let rand2
rand2 = "sfsd"
rand2.name
rand2 = () => {}
rand2.toUpperCase
// ------------------------------------------------------------------- unknown - as - function - is - in
let u: unknown = 89
;(u as string).toUpperCase

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj
}
if (hasName(u)) {
  console.log(u.name)
}
// ------------------------------------------------------------------- multi type
let numBool: number | boolean
numBool = 989
numBool = true
// ------------------------------------------------------------------- optional - default
function add(n1: number, n2: number = 33, n3?: number): number {
  return n3 ? n1 + n3 + n2 : n1 + n2
}
console.log(add(4, 5, 1), add(4, 5), add(4))
// ------------------------------------------------------------------- optional
interface Person {
  fname: string
  lname?: string
}
let per: Person = {
  fname: "nima",
}
// ------------------------------------------------------------------- class private public protected

class Cat {
  public catNamePublic: string
  protected catNameProtected: string
  private catNamePrivate: string
  constructor(name: string) {
    this.catNamePublic = name
    this.catNameProtected = name
    this.catNamePrivate = name
  }
  greet() {
    console.log("hi" + this.catNamePrivate)
  }
}
class Tiger extends Cat {
  constructor(name: string) {
    super(name)
  }
  attack() {
    console.log(this.catNameProtected + "attacked")
  }
}
let c = new Cat("tom")
let t = new Tiger("ted")
console.log(c.catNamePublic)
c.greet
// ------------------------------------------------------------------- React typescript -------------------------------------------------------------------

type StatusProps = {
  status: "loading" | "success" | "error"
}
export const Status = (props: StatusProps) => {
  props.status === "loading"
}
// ------------------------------------------------------------------- import/export type

export type Name = {
  first: string
  last: string
}
// import { Name } from "./main"
type PersonListProps = {
  names: Name[]
}
// ------------------------------------------------------------------- css properties type
type ContainerProps = {
  // styles: React.CSSProperties
}
// <div style={props.styles}>df</div>
// ------------------------------------------------------------------- onclick event type (function type)

type ButtonProps = {
  handleClick: (/*event: React.MouseEvent<HTMLButtonElement>*/) => void
}
export const Button = (props: ButtonProps) => {
  // return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
}

// ------------------------------------------------------------------- onchange event type (function type)

type InputProps = {
  value: string
  handleChange: (/*event: React.ChangeEvent<HTMLInputElement>*/) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
  // return <input type='text' value={value} onChange={handleChange} />
}
// ------------------------------------------------------------------- component type

type OscarProps = {
  /*children: React.ReactNode*/
}

export const Oscar = (props: OscarProps) => {
  // return <div>{props.children}</div>
}
// ------------------------------------------------------------------- optional

type GreetProps = {
  name: string
  messageCount?: number
}

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props // =============== messageCount | 0
  // return (<h2> {props.name}. {messageCount} </h2>)
}
// ------------------------------------------------------------------- useState

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    // setUser({
    //   name: "marzi",
    //   email: "marzi@example.com",
    // })
  }
  const handleLogout = () => {
    // setUser(null)
  }
  // return (<div>{user?.name}</div>) // ============ user && user.name
}

// ------------------------------------------------------------------- useReducer

type CounterState = { count: number }
const initialState = { count: 0 }

type UpdateAction = { type: "increment" | "decrement"; payload: number }
type ResetAction = { type: "reset" }
type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }
    case "decrement":
      return { count: state.count - action.payload }
    case "reset":
      return initialState
    default:
      return state
  }
}

export const Counter = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // return (
  //   <>
  //     Count: {state.count}
  //     <button onClick={() => dispatch({ type: "increment", payload: 10 })}></button>
  //     <button onClick={() => dispatch({ type: "decrement", payload: 10 })}></button>
  //     <button onClick={() => dispatch({ type: "reset" })}></button>
  //   </>
  // )
}

// ------------------------------------------------------------------- useContext
export const theme = {
  primary: {
    main: "#3f51b5",
    text: "#fff",
  },
  secondary: {
    main: "#f50057",
    text: "#fff",
  },
}

// export const ThemeContext = createContext(theme)

// type ThemeCProviderProps = { children: React.ReactNode }
// export const ThemeContextProvider = ({ children }: ThemeCProviderProps) => {
// return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
// }

// ------------------------------------------------------------------- useContext

// type UserContextType = {
//   user: AuthUser | null
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
// }
// senario1 export const UserContext = createContext<UserContextType | null>(null)
// senario2 : export const UserContext = createContext({} as UserContextType)  ---> {} as UserContextType ino bara in mizarim ke badan hey check nakone nulle ya chi

// type UserContextProviderProps = {
//   children: React.ReactNode
// }
// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<AuthUser | null>(null)
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   )
// }
//-----------
export const TheUser = () => {
  // const userContext = useContext(UserContext)
  // const handleLogin = () => {
  //   //senario1 if (userContext) {
  //   userContext.setUser({
  //     name: "penny",
  //     email: "asd@asd.com",
  //   })
  //   // }
  // }
  // const handleLogout = () => {
  //   //senario1 if (userContext) {
  //   userContext.setUser(null)
  //   // }
  // }
  // return (
  //   <div>
  //     <button onClick={handleLogin}>Login</button>
  //     <button onClick={handleLogout}>Logout</button>
  //     // senario2 <div>User name is {userContext.user?.name}</div>
  //     // senario2 <div>User email is {userContext.user?.email}</div>
  //     // senario1 <div>User name is {userContext?.user?.name}</div>
  //     // senario1 <div>User email is {userContext?.user?.email}</div>
  //   </div>
  // )
}

// ------------------------------------------------------------------- useRef
export const DomRef = () => {
  // const inputRef = useRef<HTMLInputElement>(null!)
  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [])
  // return (
  //   <div>
  //     <input type='text' ref={inputRef} />
  //   </div>
  // )
}

// ------------------------------------------------------------------- class component
// export class Counter extends Component<CounterProps, CounterState> {

// ------------------------------------------------------------------- component props
export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  // return <div>Private Profile component. Name is {name}</div>
}
//-----------
// import { ProfileProps } from "./Profile"

type PrivateProps = {
  isLoggedIn: boolean
  // component: React.ComponentType<ProfileProps>
}

export const Private = ({
  isLoggedIn /*component: Component*/,
}: PrivateProps) => {
  if (isLoggedIn) {
    // return <Component name="marzi" />
  }
}
// ------------------------------------------------------------------- generics

type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  // return (item.id mishe estefade kard hala)
}

// ------------------------------------------------------------------- restrics

type RandomNumberType = { value: number }

type PositiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type Zero = RandomNumberType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  // return (
  //   <div>
  //     {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
  //     {isZero && "zero"}
  //   </div>
  // )
}
//------
// <RandomNumber value={10} isPositive />

// ------------------------------------------------------------------- literals and exclude

type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center"
}

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

export const Toast = ({ position }: ToastProps) => {
  // return <div>Toast Notification Position - {position}</div>
}

// ------------------------------------------------------------------- wrapping HTML
type MyButtonProps = {
  variant: "primary" | "secondary"
  children: string
}
// &
// Omit<React.ComponentProps<"button">, "children"> ----> yani faghat children betoone string bashe

export const CustomButton = ({ variant, children, ...rest }: MyButtonProps) => {
  // return (
  //   <button className={`class-with-${variant}`} {...rest}>
  //     {children}
  //   </button>
  // )
}
// ------------------------------------------------------------------- extract prop type

// import { Greet } from '../props/Greet'

// export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
//   return <div>{props.name}</div>
// }

// ------------------------------------------------------------------- polymorphic

// type TextOwnProps<E extends React.ElementType> = {
//   size?: "sm" | "md" | "lg"
//   color?: "primary" | "secondary"
//   children: React.ReactNode
//   as?: E
// }

// type TextProps<E extends React.ElementType> = TextOwnProps<E> &
//   Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

// export const Text = <E extends React.ElementType = "div">
//   ({ size, color, children, as }: TextProps<E>) => {
//     const Component = as || "div"
//     return (
//       <Component className={`class-with-${size}-${color}`}>
//         {children}
//       </Component>
//     )
//   }
