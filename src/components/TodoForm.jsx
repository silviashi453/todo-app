import { useState } from "react";
import { CustomCheckbox } from "./CustomCheckbox";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <div
      className="h-12 bg-white dark:bg-black-todo py-3.5 px-5 w-full rounded-[5px] flex gap-x-3 
                items-center mb-4 md:mb-6 text-[14px] md:text-[18px]"
    >
      <CustomCheckbox disabled={true} />
      <input
        type="text"
        placeholder="Create a new todo.."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        className="appearance-none text-darker-gray dark:text-white-todo caret-darker-gray focus:outline-none w-full"
      />
    </div>
  );
};
