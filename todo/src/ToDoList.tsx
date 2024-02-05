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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: true })}
          placeholder="email"
        ></input>
        <input
          {...register("firstName", { required: true })}
          placeholder="firstName"
        ></input>
        <input
          {...register("lastName", { required: true })}
          placeholder="LastName"
        ></input>
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="username"
        ></input>
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="password"
        ></input>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder="password1"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
