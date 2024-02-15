import React from "react";
import { useForm } from "react-hook-form";
import DraggableCard from "./DraggableCard.tsx";
import styled from "styled-components";
import { ITodo, toDoState } from "../atoms.tsx";
import { useSetRecoilState } from "recoil";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

interface IForm {
  toDo: string;
}

interface IProps {
  toDos: ITodo[];
  boardId: string;
  index: number;
}

const Wrapper = styled.div`
  width: 300px;
  padding: 10px 0px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 20px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 15px;
`;

const Title = styled.h2`
  padding-left: 30px;
  font-weight: 600;
  margin: 18px 0px;
  font-size: 18px;
  color: white;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? props.theme.isDraggingOver
      : props.isDraggingFromThis
      ? props.theme.isDraggongFromThis
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.2s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  input {
    width: 80%;
    align-items: center;
    height: 34px;
    border: none;
    border-radius: 15px;
    background-color: ${(props) => props.theme.cardColor};
    color: ${(props) => props.theme.text};
    caret-color: transparent;
    text-align: center;
    ::placeholder {
      color: ${(props) => props.theme.text};
      text-align: center;
    }
    :focus::placeholder {
      color: transparent;
    }
  }
`;

const Board = ({ toDos, boardId, index }: IProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Draggable draggableId={boardId} index={index} key={boardId}>
      {(magic) => (
        <Wrapper
          {...magic.dragHandleProps}
          {...magic.draggableProps}
          ref={magic.innerRef}
        >
          <Title>{boardId}</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <input
              {...register("toDo", { required: true })}
              type="text"
              placeholder={`Add task on ${boardId}`}
            />
          </Form>
          <Droppable droppableId={boardId}>
            {(magic, info) => (
              <Area
                isDraggingOver={info.isDraggingOver}
                isDraggingFromThis={Boolean(info.draggingFromThisWith)}
                ref={magic.innerRef}
                {...magic.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <DraggableCard
                    key={toDo.id}
                    index={index}
                    toDoId={toDo.id}
                    toDoText={toDo.text}
                  />
                ))}
                {magic.placeholder}
              </Area>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
};
export default React.memo(Board);
