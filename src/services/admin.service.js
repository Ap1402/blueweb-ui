import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://localhost:4000/api/clients/";

const registerClient = async (client) => {
  const result = await axios.post(API_URL + "register", client).catch((err) => {
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
  registerClient,
  getFactibilityRequests,
};
