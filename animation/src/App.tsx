import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box1 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  background-color: 255, 255, 255, 0.1;
  border-radius: 40px;
  border: 0.5px solid gray;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: 255, 255, 255, 0.1;
  border: 0.5px solid gray;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  border: 0.5px solid gray;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
`;

const boxVariants1 = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

const boxVariants2 = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants2 = {
  start: { opacity: 0, y: -10 },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box1 variants={boxVariants1} initial="start" animate="end" />
      <Box2 variants={boxVariants2} initial="start" animate="end">
        <Circle variants={circleVariants2} />
        <Circle variants={circleVariants2} />
        <Circle variants={circleVariants2} />
        <Circle variants={circleVariants2} />
      </Box2>
    </Wrapper>
  );
}

export default App;
