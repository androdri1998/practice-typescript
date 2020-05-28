import React, { useState, useEffect } from "react";
import User from "./components/User";
import api from "./services/api";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    async function loadUsers(): Promise<boolean> {
      const response = await api.get<IUser[]>("/users");
      setUsers(response.data);
      return true;
    }

    loadUsers();
  }, []);
  return (
    <div>
      {users?.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
