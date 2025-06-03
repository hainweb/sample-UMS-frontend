import React from "react";
import { useEffect } from "react";
import { getAllUsers } from "../../../services/adminServices";
import { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        console.log("Fetched users:", response);

        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
          <h2>Email: {user.email}</h2>
          <p>Created: {user.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;
