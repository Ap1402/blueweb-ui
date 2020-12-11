import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/users";

const register = async (userData) => {
  const result = await axios
    .post(API_URL, userData)
    .then((data) => {
      return { success: true, message: data.response.data, sent: true };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const getCurrentUserInfo = async () => {
  try {
    const result = await axios.get(API_URL + "/me", {
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

const getAllUsers = async () => {
  try {
    const result = await axios.get(API_URL, {
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export default {
  register,
  getCurrentUserInfo,
  getAllUsers,
};
