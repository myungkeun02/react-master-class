import { useState } from "react";

function ToDoList() {
  const [toDo, setTodo] = useState("");
  const onChange = (evevt: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = evevt;
    setTodo(value);
  };
  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="Write a to do"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
