"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const todoDisplay_1 = __importDefault(require("./todoDisplay"));
const TodoApp = () => {
    const [item, setItem] = (0, react_1.useState)("");
    const [desc, setDesc] = (0, react_1.useState)("");
    const [todos, setTodos] = (0, react_1.useState)([]);
    const addItem = () => {
        const newItem = {
            id: todos.length + 1,
            item,
            desc,
            complete: false,
        };
        setTodos([...todos, newItem]);
    };
    (0, react_1.useEffect)(() => {
        console.log('todos', todos);
    }, [todos]);
    const handleChange = (e) => {
        setItem(e.currentTarget.value);
    };
    const handleDescChange = (e) => {
        setDesc(e.currentTarget.value);
    };
    const deleteItem = (id) => {
        const afterDel = todos.filter((item) => item.id !== id);
        setTodos(afterDel);
    };
    const toggleComplete = (id) => {
        const newTodos = [...todos];
        const toggleItem = newTodos.find((item) => item.id === id);
        if (toggleItem) {
            toggleItem.complete = !toggleItem.complete;
            setTodos(newTodos);
        }
        else {
            alert('not find');
        }
    };
    return (<div>
      <h1> todo app</h1>
      <div style={{ display: "flex" }}>
        <input type="text" placeholder="todo" onChange={handleChange}/>
        &nbsp;&nbsp;
        <textarea placeholder="Descr" onChange={handleDescChange}/>
        &nbsp;&nbsp;
        <button onClick={addItem}> Add</button>
      </div>
      <todoDisplay_1.default todos={todos} deleteItem={deleteItem} toggleComplete={toggleComplete}/>
    </div>);
};
exports.default = TodoApp;
