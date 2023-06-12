import axios from "axios";
import { getAuthToken, getUserEmail } from "./auth";

export const createPost = async (desc, pic) => {
  const email = getUserEmail();
  const formData = new FormData();
  formData.append("content", pic);
  formData.append("description", desc);
  formData.append("email", email);
  try {
    const response = await axios.post(
      "http://localhost:8080/posts/create-post",
      formData,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
