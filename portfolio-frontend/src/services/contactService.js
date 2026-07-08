import axios from "axios";

const API_URL = "https://portfolio-3kt4.onrender.com/api/contact";

export const sendMessage = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};