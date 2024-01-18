import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="yellow"></Circle>
      <Circle text="optional text" bgColor="tomato"></Circle>
    </div>
  );
}

export default App;
