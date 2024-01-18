import { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./theme";
import { lightTheme } from "./theme";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 100px;
`;
const Btn = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
  width: 200px;
  height: 100px;
  font-size: 40px;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Title>Hello!</Title>
        <Btn>dark theme</Btn>
      </Container>
    </ThemeProvider>
  );
}

export default App;
