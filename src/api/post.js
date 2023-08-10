import axios from "axios";
import { BASE_URL } from "../config/config";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/post`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.error("Get all posts error:", error.response.data);
    return error.response.data;
  }
};
