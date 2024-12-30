import React, { useState } from "react";

function TodoFilter({ setFilterBy }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setFilterBy(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter todos..."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default TodoFilter;
