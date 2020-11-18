import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://192.168.1.211:4000/api/users/";

const register = async (userData) => {
  const result = await axios
    .post(API_URL + "register", userData)
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
    const result = await axios.get(API_URL + "current", {
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    return result.data;
  } catch (err) {
    console.log(err.response);
    return err.response.data;
  }
};

export default {
  register,
  getCurrentUserInfo,
};
