import { CustomCheckbox } from "./CustomCheckbox";
import iconCross from "../assets/icon-cross.svg";

export const TodoItem = ({
  todo,
  index,
  dragPerson,
  draggedOverPerson,
  handleSort,
  handleCompleteTodo,
  handleDeleteTodo,
}) => {
  return (
    <div
      draggable
      onDragStart={() => (dragPerson.current = index)}
      onDragEnter={() => (draggedOverPerson.current = index)}
      onDrop={handleSort}
      onDragOver={(e) => e.preventDefault()}
      className={`group h-12 bg-white text-black py-3.5 px-5 w-full ${
        index == "0" && "rounded-t-[5px]"
      } border-b-1 border-b-smoke-white dark:border-b-dark-space flex items-center gap-x-3
       dark:bg-black-todo dark:text-white-todo cursor-pointer`}
    >
      <CustomCheckbox
        disabled={false}
        checked={todo.completed}
        onChange={() => handleCompleteTodo(todo.id)}
      />
      <div
        className={`w-full md:text-[18px] font-josefin dark:text-white-todo ${
          todo.completed
            ? "text-gray dark:text-dark-linethrough line-through"
            : "text-black"
        }`}
      >
        {todo.text}
      </div>
      <img
        onClick={() => handleDeleteTodo(todo.id)}
        src={iconCross}
        alt="Icon"
        className="w-3 h-3 block md:hidden md:group-hover:block"
      />
    </div>
  );
};
