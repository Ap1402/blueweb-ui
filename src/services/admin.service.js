import axios from "axios";

const API_URL = "http://localhost:4000/api/clients/";

const registerClient = async (client) => {
  const result = await axios.post(API_URL + "register", client).catch((err) => {
    return err.response;
  });
  return result;
};

const getMessages = async (query) => {
  const result = await axios
    .get(API_URL + "ContactMessage", {
      params: {
        page: query.page,
        size: query.size,
        wasAnswered: query.wasAnswered,
      },
    })
    .catch((err) => {
      return err.response;
    });
  return result;
};


const getFactibilityRequests = async (query) => {
  const result = await axios
    .get("http://localhost:4000/api/factibility/", {
      params: {
        page: query.page,
        size: query.size,
        wasEvaluated: query.wasEvaluated
      },
    })
    .catch((err) => {
      return err.response;
    });
  return result;
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  registerClient,
  login,
  logout,
  getCurrentUser,
  getMessages,
  getFactibilityRequests
};
