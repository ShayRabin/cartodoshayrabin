import React from "react";

function ProgressBar({ todos }) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.isDone).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div>
      <p>
        Completed: {completed}/{total}
      </p>
      <div style={{ background: "#ccc", height: "20px", borderRadius: "5px" }}>
        <div
          style={{
            width: `${percentage}%`,
            background: "#4CAF50",
            height: "100%",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
