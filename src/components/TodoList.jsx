import React from "react";
import TodoPreview from "./TodoPreview";

function TodoList({ todos, onRemoveTodo }) {
  if (!todos.length) return <p>No todos to show...</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          <TodoPreview todo={todo} />
          <button onClick={() => onRemoveTodo(todo._id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
