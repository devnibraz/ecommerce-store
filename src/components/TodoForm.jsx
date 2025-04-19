import { useState } from "react";

export const TodoForm = ({ setList }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setList((prevList) => [input, ...prevList]);
    setInput("");
  };

  const handleClear = () => {
    setList([]);
    setInput("");
  };

  return (
    <div>
      <div className="flex-row">
        <input
          type="text"
          name="todo"
          className="todo-input"
          value={input}
          onChange={handleChange}
        />
        <button className="add-todo" onClick={handleClick}>
          Add
        </button>
        <button className="clear-todos" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};
