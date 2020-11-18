import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};


//Access Admin
const getFactibilityRequests = async (query) => {
  const result = await axios
    .get("http://localhost:4000/api/factibility/", {
      params: {
        page: query.page,
        size: query.size,
        wasEvaluated: query.wasEvaluated,
      },
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return err.response;
    });
  return result;
};

export default {
  register,
  getFactibilityRequests
};
