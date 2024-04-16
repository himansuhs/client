import axios from "axios";
const API_URL = "http://localhost:5500";
export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/upload`, data); //it is a async function it will return promises
    return response.data;
  } catch (error) {
    console.error("error", error.message);
  }
};
