import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todoService } from "../services/todoService";

function TodoEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(
    id
      ? { txt: "Edit this todo...", importance: 5 }
      : { txt: "", importance: 1 }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save logic (create or update)
    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Edit Todo" : "Create Todo"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="txt"
          placeholder="Todo text..."
          value={todo.txt}
          onChange={handleChange}
        />
        <input
          type="number"
          name="importance"
          placeholder="Importance"
          value={todo.importance}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TodoEdit;
