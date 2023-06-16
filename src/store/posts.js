import axios from "axios";
import { getAuthToken, getUserId } from "./auth";

export const createPost = async (desc, pic) => {
  const formData = new FormData();
  formData.append("content", pic);
  formData.append("description", desc);
  try {
    const response = await axios.post(
      `http://localhost:8080/posts/create-post/${getUserId()}`,
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

export const editPost = async (description) => {
  const formData = new FormData();
  formData.append("content", description);
  try {
    const response = await axios.put(
      `http://localhost:8080/posts/edit-post/${getUserId()}`,
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

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/posts/delete-post/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// export const getUserPosts = async () => {
//   const formData = new FormData();
//   const id = getUserId();
//   try {
//     const response = await axios.get(
//       `http://localhost:8080/posts/get-user-posts${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${getAuthToken()}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

export const getUserPosts = async () => {
  // const formData = new FormData();
  // formData.append("userId", getUserId());
  const id = getUserId();
  try {
    const response = await axios.get(
      `http://localhost:8080/posts/get-user-posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getTimeline = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/posts/get-timeline/${getUserId()}`,
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

export const likePost = async (postId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/posts/like-post/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const unlikePost = async (postId) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/posts/unlike-post/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
