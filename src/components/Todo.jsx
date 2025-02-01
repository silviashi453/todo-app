import { TodoItem } from "./TodoItem";
import { FilterTodo } from "./FilterTodo";
import { useRef } from "react";

export const Todo = ({
  items,
  setItems,
  handleCompleteTodo,
  handleClearCompleted,
  handleFilterTodos,
  handleDeleteTodo,
}) => {
  const dragPerson = useRef(null);
  const draggedOverPerson = useRef(null);

  const handleSort = () => {
    if (dragPerson.current === null || draggedOverPerson.current === null)
      return;

    const itemsClone = [...items];
    const temp = itemsClone[dragPerson.current];
    itemsClone[dragPerson.current] = itemsClone[draggedOverPerson.current];
    itemsClone[draggedOverPerson.current] = temp;

    setItems([...itemsClone]);

    dragPerson.current = null;
    draggedOverPerson.current = null;
  };

  return (
    <>
      <div className="shadow-xl rounded-[5px] relative text-[14px] mb-25 md:mb-[58px]">
        {items.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            dragPerson={dragPerson}
            draggedOverPerson={draggedOverPerson}
            handleSort={handleSort}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
        <div
          className={`h-12 bg-white dark:bg-black-todo py-3.5 px-5 w-full rounded-b-[5px]
          flex items-center justify-between`}
        >
          <div className="dark:text-dark-white text-darker-gray">{`${items.length} items left`}</div>
          <div
            className={`absolute md:relative md:top-0 md:flex md:items-center -bottom-16 left-0 h-12 md:h-0 bg-white 
                md:bg-transparent dark:bg-black-todo dark:text-white-todo py-3.5 px-5 md:p-0 w-full 
                shadow-xl md:shadow-none rounded-[5px] md:rounded-none md:w-fit text-darker-gray font-bold`}
          >
            <FilterTodo handleFilterTodos={handleFilterTodos} />
          </div>
          <div
            onClick={() => handleClearCompleted()}
            className="cursor-pointer text-darker-gray hover:text-black dark:text-dark-white dark:hover:text-white-todo"
          >
            Clear Completed
          </div>
        </div>
      </div>
      <p className="text-[14px] text-darker-gray text-center">
        Drag and drop to reorder list
      </p>
    </>
  );
};
