import React from "react";
import { Link } from "react-router-dom";

function AppHeader({ user }) {
  return (
    <header>
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          CarTodo App
        </Link>
      </h1>
      <nav>
        <Link to="/">Todos</Link>
        <Link to="/user">User</Link>
        {user ? (
          <>
            <span>ברוך הבא, {user.name}</span>
            <Link to="/cars-for-sale">מכוניות למכירה</Link>
          </>
        ) : (
          <Link to="/login">התחבר</Link>
        )}
      </nav>
    </header>
  );
}

export default AppHeader;
