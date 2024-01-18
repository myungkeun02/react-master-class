import styled from "styled-components";

// styled-components type interpace
interface ContaninerProps {
  bgColor: string;
  borderColor?: string;
}

// components type interpace
interface CicleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// styled-component
const Cantainer = styled.div<ContaninerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// component
function Circle({ bgColor, borderColor, text = "default text" }: CicleProps) {
  return (
    <Cantainer bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Cantainer>
  );
}

export default Circle;
