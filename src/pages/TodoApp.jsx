import React, { useState } from "react";

const initialTodos = [
  { id: 1, text: "למכור רכב ישן" },
  { id: 2, text: "לקנות רכב חדש" },
  { id: 3, text: 'להרביץ 200 קמ"ש כל הדרך' },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>רשימת משימות</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
