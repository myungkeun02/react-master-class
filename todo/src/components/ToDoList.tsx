import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import styled from "styled-components";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Head = styled.div`
    font-size: 70px;
  `;
  const BtnContainer = styled.div`
    width: 340px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  `;
  const CategoriesBtn = styled.button`
    width: 100px;
    height: 30px;
  `;
  return (
    <Container>
      <Head>나의 할 일 목록</Head>
      <BtnContainer>
        <CategoriesBtn value={Categories.TO_DO}>To DO</CategoriesBtn>
        <CategoriesBtn value={Categories.DOING}>Doing</CategoriesBtn>
        <CategoriesBtn value={Categories.DONE}>Done</CategoriesBtn>
      </BtnContainer>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
