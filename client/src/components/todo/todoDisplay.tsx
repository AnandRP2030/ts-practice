import { Todo } from "../../types";
interface MyTodo {
  todos: Todo[];
  deleteItem: (id: number) => void;
  toggleComplete: (id: number) => void;
}
const DisplayTodos = ({ todos, deleteItem, toggleComplete }: MyTodo) => {
  console.log("todos => ", todos);
  return (
    <div>
      {todos.map((todo: Todo) => {
        return (
          <div key={todo.id} style={{ display: "flex" }}>
            {todo.complete ? (
              <div>
                <del>
                  {todo.item}
                  <p>{todo.desc}</p>
                </del>
              </div>
            ) : (
              <div>
                <p>{todo.item}</p>
                <p>{todo.desc}</p>
              </div>
            )}

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button
              onClick={() => {
                deleteItem(todo.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                toggleComplete(todo.id);
              }}
            >
              Complete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
