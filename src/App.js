import styled from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  margin: 10px;
  color: white;
  background-color: tomato;
  border: 0;
  width: 50px;
  height: 20px;
  border-radius: 15px;
  text-align: center;
`;

const Input = styled.input.attrs({ required: true })`
  margin: 10px;
  background-color: tomato;
  width: 100px;
  height: 20px;
  border: 0px;
  border-radius: 5px;
`;

function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Btn>Log in</Btn>
      <Btn as="a" href="https://www.youtube.com">
        go
      </Btn>
    </Father>
  );
}

export default App;
