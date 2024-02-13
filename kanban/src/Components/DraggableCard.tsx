import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<ICardProps>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#b8e994" : props.theme.cardColor};
  transition: background-color 0.3s;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDraggbleCardProps {
  toDo: string;
  index: number;
}
interface ICardProps {
  isDragging: boolean;
}

function DraggableCard({ toDo, index }: IDraggbleCardProps) {
  console.log(index, "has been rendered ");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          isDragging={snapshot.isDragging}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
