import React from "react";

function TodoPreview({ todo }) {
  return (
    <div>
      <h3>{todo.txt}</h3>
      <p>Importance: {todo.importance}</p>
    </div>
  );
}

export default TodoPreview;
