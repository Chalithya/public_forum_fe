import axios from "axios";
import { BASE_URL } from "../config/config";

export const getAll = async () => {
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

export const create = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/post`, data, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.error("Create post error:", error.response.data);
    return error.response.data;
  }
};

export const addComment = async (data, id) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/post/${id}`,
      { comment: data },
      {
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    console.error("Comment adding error:", error.response.data);
    return error.response.data;
  }
};

export const getById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/post/${id}`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.error("Comment adding error:", error.response.data);
    return error.response.data;
  }
};
