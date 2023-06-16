import axios from "axios";

export const getAuthToken = () => {
  return sessionStorage.getItem("authToken");
};
export const setAuthToken = (jwt) => {
  return sessionStorage.setItem("authToken", jwt);
};
export const setUserEmail = (email) => {
  return sessionStorage.setItem("email", email);
};
export const getUserEmail = () => {
  return sessionStorage.getItem("email");
};
export const setUserId = (userId) => {
  return sessionStorage.setItem("userId", userId);
};
export const getUserId = () => {
  return sessionStorage.getItem("userId");
};

export const setUserAlias = (alias) => {
  return sessionStorage.setItem("alias", alias);
};
export const getUserAlias = () => {
  return sessionStorage.getItem("alias");
};

export const setUserName = (name) => {
  return sessionStorage.setItem("name", name);
};
export const getUserName = () => {
  return sessionStorage.getItem("name");
};

export const setUserPic = (pic) => {
  return sessionStorage.setItem("profilePic", pic);
};
export const getUserPic = () => {
  return sessionStorage.getItem("profilePic");
};

export const setLikes = (num) => {
  return sessionStorage.setItem("likes", num);
};
export const getLikes = () => {
  return sessionStorage.getItem("likes");
};

export const setNewComments = (num) => {
  return sessionStorage.setItem("comments", num);
};
export const getNewComments = () => {
  return sessionStorage.getItem("comments");
};

export const clearStorage = () => {
  sessionStorage.clear();
};

export const authenticate = async (email, password) => {
  const formData = new FormData();
  formData.append("email", email); // Convert user object to string and append to FormData
  formData.append("password", password);
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setAuthToken(response.data.jwt);
    setUserEmail(response.data.email);
    setUserId(response.data.userId);
    setUserAlias(response.data.alias);
    setUserName(response.data.name);
    setUserPic(response.data.profilePic);
    setLikes(response.data.likeNotifications);
    setNewComments(response.data.commentNotifications);
    return response;
  } catch (error) {
    console.error(error);
    alert(
      `${error}. Please try creating a user again later or with different data!`
    );
    return error;
  }
};

export const register = async (
  nickname,
  fullName,
  email,
  password,
  dateOfBirth,
  faculty,
  facultyNumber,
  profilePicFile
) => {
  const formData = new FormData();
  formData.append("alias", nickname);
  formData.append("name", fullName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("dateOfBirth", dateOfBirth);
  formData.append("faculty", faculty);
  formData.append("facultyNumber", facultyNumber);
  formData.append("profilePic", profilePicFile);

  try {
    const response = await axios.post(
      "http://localhost:8080/users/create-user",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data); // Handle success response
    return response;
  } catch (error) {
    console.error(error); // Handle error
    alert(
      `${error}. Please try creating a user again later or with different data!`
    );
    return error;
  }
};
