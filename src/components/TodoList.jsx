import { useState } from "react";
import { TodoForm } from "./TodoForm";

function TodoList() {
  const [list, setList] = useState([]);

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <TodoForm setList={setList} />
        <ol className="todo-list">
          {list.map((item, index) => (
            <li key={index} className="todo-item">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
