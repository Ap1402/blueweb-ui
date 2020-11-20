import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://localhost:8080/api/reports/";

const registerReport = (dni, message, reason) => {
  return axios.post(API_URL , {
    dni,
    message,
    reason,
  });
};

export default {
  registerReport
};
