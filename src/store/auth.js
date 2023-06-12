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
    setAuthToken(response.data.jwt); // Save the token in session storage
    setUserEmail(response.data.email);
    return response;
  } catch (error) {
    console.error(error); // Handle error
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
  formData.append("alias", nickname); // Convert user object to string and append to FormData
  formData.append("name", fullName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("dateOfBirth", dateOfBirth);
  formData.append("faculty", faculty);
  formData.append("facultyNumber", facultyNumber);
  formData.append("profilePic", profilePicFile); // Add the profile picture file

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
