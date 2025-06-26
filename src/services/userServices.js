import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

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

export const editUserProfile = async (formData) => {
  console.log("form data", formData);

  try {
    const response = await axios.put(`${API_URL}/edit-profile`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

