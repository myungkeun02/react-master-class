import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

//atom으로 todo 값을 받아와 default 배열에 넣음( todoState를 호출하면 기본적으로 생성된 배열이 호출됨)
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

//toDoState에 담긴 배열을 category별로 분류하여 세개의 각각 다른 배열에 정리 toDos[0] -> todo, toDos[1] -> doing, toDos[2] -> done
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
