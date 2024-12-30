const todos = [
  { _id: "1", txt: "Learn React", importance: 9, isDone: false },
  { _id: "2", txt: "Build Todo App", importance: 8, isDone: true },
];

export const todoService = {
  query,
  remove,
};

async function query(filterBy) {
  if (!filterBy) return todos;
  return todos.filter((todo) => todo.txt.includes(filterBy));
}

async function remove(todoId) {
  const idx = todos.findIndex((todo) => todo._id === todoId);
  todos.splice(idx, 1);
}
