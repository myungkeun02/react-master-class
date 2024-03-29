import { DragDropContext, Droppable, DragStart } from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { BoardState, toDoState, TrashCanState } from "./atoms.tsx";
import Board from "./Components/Board.tsx";
import React from "react";
import { onDrageEnd } from "./utills.tsx";
import Trash from "./Components/Trash.tsx";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

const Title = styled.h1`
  position: absolute;
  top: 25px;
  left: 25px;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [boards, setBoards] = useRecoilState(BoardState);
  const setTrashCan = useSetRecoilState(TrashCanState);
  const onBeforeDragStart = (info: DragStart) => {
    if (info.type === "DEFAULT") setTrashCan(true);
  };
  return (
    <DragDropContext
      onDragEnd={(info) => onDrageEnd(info, setBoards, setToDos, setTrashCan)}
      onBeforeDragStart={onBeforeDragStart}
    >
      <Wrapper>
        <Title>Kanban TODODO</Title>
        <Droppable droppableId="boards" direction="horizontal" type="board">
          {(magic) => (
            <Boards ref={magic.innerRef} {...magic.droppableProps}>
              {boards.map((boardId, index) => (
                <Board
                  boardId={boardId}
                  toDos={toDos[boardId]}
                  index={index}
                  key={index}
                />
              ))}
              {magic.placeholder}
            </Boards>
          )}
        </Droppable>
        <Trash />
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
