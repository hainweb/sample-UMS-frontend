import Input from "../../../components/Input/Input";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../../services/authServices";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await loginService(formData);
    if (response?.data.success) {
      login(response.data.user);
      navigate("/");
    } else {
      setError(response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />

        {error && <h3>{error}</h3>}
        <Button text="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Login;
