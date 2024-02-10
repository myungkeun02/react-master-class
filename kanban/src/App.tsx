import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDrageEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDrageEnd}>
      <div>
        <Droppable droppableId="one">
          {(masic) => (
            <ul ref={masic.innerRef} {...masic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(masic) => (
                  <li ref={masic.innerRef} {...masic.draggableProps} >
                    {" "}
                    <span {...masic.dragHandleProps}>🔥</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(masic) => (
                  <li ref={masic.innerRef} {...masic.draggableProps}>
                    <span {...masic.dragHandleProps}>🔥</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
