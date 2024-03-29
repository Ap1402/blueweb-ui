import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";
import setAuthToken from "../helpers/setAuthToken";

const API_URL = getEnvUrl() + "/auth/";

const login = async (userData) => {
  const result = await axios.post(API_URL + "login", userData).catch((err) => {
    return err.response;
  });

  if (result.status === 201) {
    const response = {
      success: true,
      message: "Datos correctos",
      role: result.data.role,
    };
    setAuthToken(result.data);
    return response;
  } else {
    const response = {
      success: false,
      message: result.data.message,
      role: "",
    };
    setAuthToken(result.data);
    return response;
  }
};

const logout = async () => {
  /*   const result = await axios
    .get(API_URL + "logout", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return err.response;
    }); */
  localStorage.removeItem("token");
};

const isAuthenticated = async () => {
  const result = await axios
    .get(API_URL + "validateToken", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return {
        isAuth: false,
        role: null,
        id: null,
      };
    });
  if (result.status === 200) {
    return {
      isAuth: true,
      role: result.data.role,
      id: result.data.userId,
    };
  } else {
    return result;
  }
};
 
export default {
  login,
  logout,
  isAuthenticated,
};
