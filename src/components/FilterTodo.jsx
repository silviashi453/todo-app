import { useState } from "react";

//'all', 'active', 'completed'
const options = ["all", "active", "completed"];

export const FilterTodo = ({ handleFilterTodos }) => {
  const [selected, setSelected] = useState("all");

  return (
    <nav className="flex items-center justify-center space-x-[19px]">
      {options.map((option) => (
        <button
          key={option}
          className={`cursor-pointer capitalize 
            ${
              selected === option
                ? "text-blue"
                : "hover:text-black dark:hover:text-white-todo dark:text-dark-white text-darker-gray"
            }
            `}
          onClick={() => {
            setSelected(option), handleFilterTodos(option);
          }}
        >
          {option}
        </button>
      ))}
    </nav>
  );
};
