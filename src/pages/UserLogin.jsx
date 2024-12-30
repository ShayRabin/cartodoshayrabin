import React, { useState } from "react";

const UserLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("אנא מלא את כל השדות");
      return;
    }
    // Example user authentication logic
    const userData = { email, name: "User" };
    onLogin(userData);
    alert(`ברוך הבא, ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="user-login">
      <h2>התחברות</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="סיסמא"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">התחבר</button>
      </form>
    </div>
  );
};

export default UserLogin;
