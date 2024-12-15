import { useEffect, useState } from "react";
import DisplayTodos from "./todoDisplay";
import { Todo } from "../../types";
const TodoApp = () => {
  const [item, setItem] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const addItem = () => {
    const newItem = {
      id: todos.length + 1,
      item,
      desc,
      complete: false,
    };
    setTodos([...todos, newItem]);
  };
  
  useEffect(() => {
    console.log('todos', todos)
  }, [todos])
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  };

  const handleDescChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDesc(e.currentTarget.value);
  };
  const deleteItem = (id: number) => {
    const afterDel = todos.filter((item: Todo) => item.id !== id);
    setTodos(afterDel);
  };
  const toggleComplete = (id: number) => {
    const newTodos = [...todos];
    const toggleItem = newTodos.find((item: Todo) => item.id === id);
    if (toggleItem) {
        toggleItem.complete = !toggleItem.complete;
      setTodos(newTodos);
    }else {
        alert('not find')
    }
  };

  return (
    <div>
      <h1> todo app</h1>
      <div style={{ display: "flex" }}>
        <input type="text" placeholder="todo" onChange={handleChange} />
        &nbsp;&nbsp;
        <textarea placeholder="Descr" onChange={handleDescChange} />
        &nbsp;&nbsp;
        <button onClick={addItem}> Add</button>
      </div>
      <DisplayTodos
        todos={todos}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoApp;
