import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const VerifyAdmin = ({ children }) => {
  const { user } = useAuth();
  console.log("user", user);

  if (user?.role == "admin") {
    return children;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default VerifyAdmin;
