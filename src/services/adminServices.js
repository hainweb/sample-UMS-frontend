import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin/get-users`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
