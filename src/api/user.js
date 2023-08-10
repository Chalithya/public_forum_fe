import axios from "axios";
import { BASE_URL } from "../config/config";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/login`,
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.error("user login error:", error.response.data);
    return error.response.data;
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/register`,
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.error("user registration error:", error.response.data);
    return error.response.data;
  }
};

export const logOut = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/logout`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log("🚀 ~ file: user.js:49 ~ logOut ~ response:", response)

    return response;
  } catch (error) {
    console.error("user logout error:", error.response.data);
    return error.response.data;
  }
};
