import React, { createContext, useState, useEffect } from "react";
import { getUserId, getAuthToken } from "./auth";
import axios from "axios";

const FriendsContext = createContext();

export const AppProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [myFriends, setMyFriends] = useState([]);
  const [requests, setRequests] = useState([]);

  const getPeople = async () => {
    const userId = getUserId();
    try {
      const response = await axios.get(
        `http://localhost:8080/friends/get-non-friends/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        }
      );
      setPeople(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getFriends = async () => {
    const userId = getUserId();
    try {
      const response = await axios.get(
        `http://localhost:8080/friends/get-friends/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        }
      );
      setMyFriends(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRequests = async () => {
    const userId = getUserId();
    try {
      const response = await axios.get(
        `http://localhost:8080/friends/get-requests/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        }
      );
      setRequests(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const sendFriendRequest = async (friendUserId) => {
    const id = getUserId();
    const formData = new FormData();
    formData.append("friendUserId", friendUserId);
    try {
      const response = await axios.post(
        `http://localhost:8080/friends/send-request/${id}`,
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
      console.error("Error sending friend request:", error);
      throw error; // Rethrow the error or handle it as needed
    }
  };

  const acceptFriendRequest = async (friendUserId) => {
    const id = getUserId();
    const formData = new FormData();
    formData.append("friendUserId", id);
    try {
      const response = await axios.put(
        `http://localhost:8080/friends/accept-request/${friendUserId}`,
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
      console.error("Error accepting friend request:", error);
      throw error; // Rethrow the error or handle it as needed
    }
  };

  const declineFriendRequest = async (friendId) => {
    const id = getUserId();
    const formData = new FormData();
    formData.append("friendUserId", id);
    try {
      const response = await axios.put(
        `http://localhost:8080/friends/decline-request/${friendId}`,
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
      console.error("Error declining friend request:", error);
      throw error; // Rethrow the error or handle it as needed
    }
  };

  const removeFriendRequest = async (friendId) => {
    const id = getUserId();
    const formData = new FormData();
    formData.append("friendUserId", friendId);
    try {
      const response = await axios.put(
        `http://localhost:8080/friends/remove-friend/${id}`,
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
      console.error("Error removing friend:", error);
      throw error; // Rethrow the error or handle it as needed
    }
  };

  const blockUser = async (friendId) => {
    const id = getUserId();
    const formData = new FormData();
    formData.append("friendId", friendId);
    try {
      const response = await axios.post(
        `http://localhost:8080/friends/block-user/${id}`,
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
      console.error("Error blocking user:", error);
      throw error; // Rethrow the error or handle it as needed
    }
  };

  useEffect(() => {}, []);

  const contextValue = {
    people,
    requests,
    myFriends,
    getPeople,
    getFriends,
    getRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    removeFriendRequest,
    blockUser,
  };

  return (
    <FriendsContext.Provider value={contextValue}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsContext;
