"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Counter = exports.User = exports.Greet = exports.Oscar = exports.Input = exports.Button = exports.Status = void 0;
var msg = "hiyy";
console.log(msg);
var p1 = ["sss", 5];
//-------------------------------------- enum
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
//-------------------------------------- any
var rand = 22;
rand = "sfsd";
rand.name;
rand = function () { };
rand.toUpperCase;
//--------------------------------------
var rand2;
rand2 = "sfsd";
rand2.name;
rand2 = function () { };
rand2.toUpperCase;
//-------------------------------------- unknown - as - function - is - in
var u = 89;
u.toUpperCase;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(u)) {
    console.log(u.name);
}
//-------------------------------------- multi type
var numBool;
numBool = 989;
numBool = true;
//-------------------------------------- optional - default
function add(n1, n2, n3) {
    if (n2 === void 0) { n2 = 33; }
    return n3 ? n1 + n3 + n2 : n1 + n2;
}
console.log(add(4, 5, 1), add(4, 5), add(4));
var per = {
    fname: "nima"
};
//-------------------------------------- class private public protected
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.catNamePublic = name;
        this.catNameProtected = name;
        this.catNamePrivate = name;
    }
    Cat.prototype.greet = function () {
        console.log("hi" + this.catNamePrivate);
    };
    return Cat;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.attack = function () {
        console.log(this.catNameProtected + "attacked");
    };
    return Tiger;
}(Cat));
var c = new Cat("tom");
var t = new Tiger("ted");
console.log(c.catNamePublic);
c.greet;
var Status = function (props) {
    props.status === "loading";
};
exports.Status = Status;
var Button = function (props) {
    // return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
};
exports.Button = Button;
var Input = function (_a) {
    var value = _a.value, handleChange = _a.handleChange;
    // return <input type='text' value={value} onChange={handleChange} />
};
exports.Input = Input;
var Oscar = function (props) {
    // return <div>{props.children}</div>
};
exports.Oscar = Oscar;
var Greet = function (props) {
    var _a = props.messageCount, messageCount = _a === void 0 ? 0 : _a; // =============== messageCount | 0
    // return (<h2> {props.name}. {messageCount} </h2>)
};
exports.Greet = Greet;
var User = function () {
    // const [user, setUser] = useState<AuthUser | null>(null)
    var handleLogin = function () {
        // setUser({
        //   name: "marzi",
        //   email: "marzi@example.com",
        // })
    };
    var handleLogout = function () {
        // setUser(null)
    };
    // return (<div>{user?.name}</div>) // ============ user && user.name
};
exports.User = User;
var initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        case "reset":
            return initialState;
        default:
            return state;
    }
}
var Counter = function () {
    // const [state, dispatch] = useReducer(reducer, initialState)
    // return (
    //   <>
    //     Count: {state.count}
    //     <button onClick={() => dispatch({ type: "increment", payload: 10 })}></button>
    //     <button onClick={() => dispatch({ type: "decrement", payload: 10 })}></button>
    //     <button onClick={() => dispatch({ type: "reset" })}></button>
    //   </>
    // )
};
exports.Counter = Counter;
