import axios from "axios";
import { getAuthToken, getUserEmail, getUserId } from "./auth";

export const createComment = async (postId, text) => {
  const formData = new FormData();
  formData.append("postId", postId);
  formData.append("text", text);
  try {
    const response = await axios.post(
      `http://localhost:8080/comments/create-comment/${getUserId()}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteComment = async (commentId) => {
  const formData = new FormData();
  formData.append("commentId", commentId);
  try {
    const response = await axios.delete(
      `http://localhost:8080/comments/delete-comment${commentId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
