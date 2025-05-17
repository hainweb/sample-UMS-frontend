import React, { useEffect, useState } from "react";
import { editUserProfile, getUserProfile } from "../../services/userServices";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Profile = () => {
  const [user, setUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [error, setEror] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
  });
  const handleEdit = () => {
    setFormData({ name: user.name, age: user.age });
    setIsEdit(true);
  };
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

  const handleChange = (e) => {
   
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await editUserProfile(formData);
    if (response.success) {
      user.name = formData.name;
      user.age = formData.age;
      setIsEdit(false);
    } else {
      setEror(response.message || "Some thing went wrong");
    }
  };
  return (
    <div>
      {!isEdit ? (
        <>
          <h2>{user.name}</h2>
          <h2>{user.age}</h2>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          <Input
            type="number"
            onChange={handleChange}
            name="age"
            value={formData.age}
          />
        </form>
      )}
      <h2>{user.email}</h2>
      <h2>{user.createdAt}</h2>
      <h2>{user.role}</h2>
      {isEdit ? (
        <Button text="Save" onClick={handleSubmit} />
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      {error && <h3 className="error">{error}</h3>}
    </div>
  );
};

export default Profile;
