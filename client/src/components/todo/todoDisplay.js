"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayTodos = ({ todos, deleteItem, toggleComplete }) => {
    console.log("todos => ", todos);
    return (<div>
      {todos.map((todo) => {
            return (<div key={todo.id} style={{ display: "flex" }}>
            {todo.complete ? (<div>
                <del>
                  {todo.item}
                  <p>{todo.desc}</p>
                </del>
              </div>) : (<div>
                <p>{todo.item}</p>
                <p>{todo.desc}</p>
              </div>)}

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button onClick={() => {
                    deleteItem(todo.id);
                }}>
              Delete
            </button>
            <button onClick={() => {
                    toggleComplete(todo.id);
                }}>
              Complete
            </button>
          </div>);
        })}
    </div>);
};
exports.default = DisplayTodos;
