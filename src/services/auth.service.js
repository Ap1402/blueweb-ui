import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import setAuthToken from "../helpers/setAuthToken";

const API_URL = "http://localhost:4000/api/auth/";

const register = async (userData) => {
  const result = await axios
    .post("http://localhost:4000/api/users/register", userData)
    .catch((err) => {
      console.log(err.response);

      return err.response;
    });
  return result;
};

const login = async (userData) => {
  const result = await axios
    .post("http://localhost:4000/api/users/" + "login", userData)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  setAuthToken(result.data);
  return result;
};

const logout = async () => {
  const result = await axios
    .get("http://localhost:4000/api/users/" + "logout", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      localStorage.removeItem("token");
      return err.response;
    });
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
