import React from "react";

const ManageUsers = () => {
  const users = [
    { name: "Ajin", age: 18, email: "jfj", role: "user", createdAt: "54ghhh" },
    {
      name: "user 2",
      age: 39,
      email: "jfjsnj",
      role: "user",
      createdAt: "95n55n",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
          <h2>Email: {user.email}</h2>
          <p>Created: {user.createdAt}</p>
        </>
      ))}
    </div>
  );
};

export default ManageUsers;
