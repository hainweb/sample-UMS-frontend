import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const {user} = useAuth();
  return (
    <div>
      <h2>User management system {user?.name}</h2>
    </div>
  );
};

export default Home;
