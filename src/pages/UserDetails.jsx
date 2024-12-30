import React, { useEffect, useState } from "react";
import { userService } from "../services/userService";

function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await userService.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
