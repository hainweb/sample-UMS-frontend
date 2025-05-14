import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
