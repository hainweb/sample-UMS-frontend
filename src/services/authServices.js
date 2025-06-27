import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, formData, {
      withCredentials: true,
    });

    console.log("Signup response:", response);
    return response;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    return null;
  }
};

export const loginService = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, formData, {
      withCredentials: true,
    });

    console.log("Login response:", response);
    return response;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    return null;
  }
};

export const doLogout = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
};
