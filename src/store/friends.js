import axios from "axios";
import { getAuthToken, getUserEmail, getUserId } from "./auth";

export const sendFriendRequest = async (friendUserId) => {
  const formData = new FormData();
  formData.append("userId", friendUserId);
  try {
    const response = await axios.post(
      `http://localhost:8080/friends/add-friend/${getUserId()}`,
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

export const acceptFriendRequest = async (friendUserId) => {
  const formData = new FormData();
  formData.append("friendUserId", friendUserId);
  try {
    const response = await axios.put(
      `http://localhost:8080/friends/accept-friend`,
      formData,
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

export const removeFriend = async (friendId) => {
  const formData = new FormData();
  formData.append("friendId", friendId);
  try {
    const response = await axios.put(
      `http://localhost:8080/friends/remove-friend/${getUserId()}`,
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

export const blockUser = async (friendId) => {
  const formData = new FormData();
  formData.append("friendId", friendId);
  try {
    const response = await axios.put(
      `http://localhost:8080/friends/block-user/${getUserId()}`,
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

export const declineFriendRequest = async (friendId) => {
  const formData = new FormData();
  formData.append("friendId", friendId);
  try {
    const response = await axios.put(
      `http://localhost:8080/friends/remove-friend/${getUserId()}`,
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

export const getUserFriends = async () => {
  const formData = new FormData();
  formData.append("userId", getUserId());
  try {
    const response = await axios.get(
      `http://localhost:8080/friends/get-friends/${getUserId()}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${getAuthToken}`,
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
