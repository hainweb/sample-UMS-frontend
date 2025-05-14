import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/userServices";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getUserProfile();
        setUser(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.email}</h2>
      <h2>{user.createdAt}</h2>
      <h2>{user.role}</h2>
      <button>Edit</button>
    </div>
  );
};

export default Profile;
