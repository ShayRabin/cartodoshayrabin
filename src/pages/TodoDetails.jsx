import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { todoService } from "../services/todoService";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await todoService.query();
      setTodo(todo.find((t) => t._id === id));
    };

    fetchTodo();
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>{todo.txt}</h2>
      <p>Importance: {todo.importance}</p>
      <p>Status: {todo.isDone ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoDetails;
