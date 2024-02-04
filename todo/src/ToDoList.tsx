import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (evevt: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = evevt;
//     setToDoError("");
//     setTodo(value);
//   };
//   const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onsubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           placeholder="Write a to do"
//         ></input>
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="email"></input>
        <input {...register("firstName")} placeholder="firstName"></input>
        <input {...register("lastName")} placeholder="LastName"></input>
        <input {...register("username")} placeholder="username"></input>
        <input {...register("password")} placeholder="password"></input>
        <input {...register("password1")} placeholder="password1"></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
