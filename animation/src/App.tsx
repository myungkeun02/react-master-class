import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgb(186, 220, 88), rgb(236, 240, 222));
`;

const Title = styled.h1`
  margin: 20px;
  font-size: 50px;
  font-weight: 500;
  color: rgb(180, 180, 180);
`;
const Boxs = styled.div`
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
  border: 0.5px solid rgb(180, 180, 180);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: 255, 255, 255, 0.1;
  border: 0.5px solid rgb(180, 180, 180);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box3 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: 255, 255, 255, 0.1;
  border: 0.5px solid rgb(180, 180, 180);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box4 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 255, 255, 255, 0.1;
  border: 0.5px solid rgb(180, 180, 180);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box5 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  background-color: 255, 255, 255, 0.1;
  border-radius: 40px;
  border: 0.5px solid rgb(180, 180, 180);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle2 = styled(motion.div)`
  background-color: rgb(180, 180, 180);
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  border: 0.5px solid gray;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba;
`;

const MiniBox4 = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgb(180, 180, 180);
  border-radius: 20px;
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

const boxVariants3 = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const box4Ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(186, 220, 88), rgb(236, 240, 222))",
      "linear-gradient(135deg, rgb(236, 240, 222), rgb(186, 220, 88))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <Title>Animetion</Title>
      <Boxs>
        <Box1 variants={boxVariants1} initial="start" animate="end" />
        <Box2 variants={boxVariants2} initial="start" animate="end">
          <Circle2 variants={circleVariants2} />
          <Circle2 variants={circleVariants2} />
          <Circle2 variants={circleVariants2} />
          <Circle2 variants={circleVariants2} />
        </Box2>
        <Box3 variants={boxVariants3} whileHover="hover" whileTap="click" />
        <Box4 ref={box4Ref}>
          <MiniBox4
            drag
            dragSnapToOrigin
            dragConstraints={box4Ref}
            dragElastic={0.5}
          ></MiniBox4>
        </Box4>
        <Box5 style={{ x, rotateZ }} drag="x" dragSnapToOrigin></Box5>
      </Boxs>
    </Wrapper>
  );
}

export default App;
