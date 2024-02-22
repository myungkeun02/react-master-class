import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 300vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box8Div = styled.div`
  margin: 20px;
  height: 260px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

const Box6 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  background-color: 255, 255, 255, 0.1;
  border-radius: 40px;
  border: 0.5px solid rgb(180, 180, 180);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box7 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  background-color: 255, 255, 255, 0.1;
  border-radius: 40px;
  border: 0.5px solid rgb(180, 180, 180);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box8 = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: 255, 255, 255, 0.1;
  border-radius: 40px;
  border: 0.5px solid rgb(180, 180, 180);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Svg7 = styled.svg`
  width: 150px;
  height: 150px;
`;

const Button8 = styled.button`
  width: 70px;
  height: 40px;
  margin: 0px;
  background-color: rgb(180, 180, 180);
  border-radius: 10px;
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

const svgVariants7 = {
  start: {
    pathLength: 0,
    fill: "rgba(180, 180, 180, 0)",
  },
  end: {
    pathLength: 1,
    fill: "rgba(180, 180, 180, 1)",
  },
};

const BoxVariants8 = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 50,
  },
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
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const [showing, setShowing] = useState(false);
  const togggleShowing = () => setShowing((prev) => !prev);

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
        <Box6 style={{ scale }} />
        <Box7>
          <Svg7 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path
              variants={svgVariants7}
              initial={"start"}
              animate={"end"}
              transition={{
                default: {
                  duration: 5,
                },
                fill: {
                  duration: 2,
                  delay: 3,
                },
              }}
              stroke="rgb(80, 80, 80)"
              strokeWidth="2"
              d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
            />
          </Svg7>
        </Box7>
        <Box8Div>
          <AnimatePresence>
            {showing ? (
              <Box8
                variants={BoxVariants8}
                initial="initial"
                animate="visible"
                exit="leaving"
              />
            ) : null}
          </AnimatePresence>
          <Button8 onClick={togggleShowing}>Click Me!!</Button8>
        </Box8Div>
      </Boxs>
    </Wrapper>
  );
}

export default App;
