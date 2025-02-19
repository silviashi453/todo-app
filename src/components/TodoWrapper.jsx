import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useState, useEffect } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import { v4 as uuidv4 } from "uuid";

uuidv4();
export const TodoWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); //'all', 'active', 'completed'

  const todosToDisplay = [...todos].filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; //for all
  });

  console.log("Filter ", filter, " and todosDisplay ", todosToDisplay);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log("Todos from localStorage:", storedTodos);
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save to localStorage
  }, [todos]);

  const handleAddTodo = (todo) => {
    if (todo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: todo, completed: false }]);
    }
  };

  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return updatedTodos;
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleFilterTodos = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="w-[327px] md:w-[540px]">
      {/* Todo Header */}
      <div className="flex justify-between items-center pt-12 lg:pt-[70px] pb-10 lg:pb-12">
        <h1 className="font-bold text-white text-2xl lg:text-[40px] tracking-[12px]">
          TODO
        </h1>
        <img
          src={`${isDarkMode ? iconSun : iconMoon}`}
          alt="Icon"
          className="w-5 h-5 lg:w-6 lg:h-6"
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
      {/* Todo Form */}
      <TodoForm addTodo={handleAddTodo} />
      {/* Todo */}
      <Todo
        items={todosToDisplay}
        setItems={setTodos}
        handleCompleteTodo={handleCompleteTodo}
        handleClearCompleted={handleClearCompleted}
        handleDeleteTodo={handleDeleteTodo}
        handleFilterTodos={handleFilterTodos}
      />
    </div>
  );
};
