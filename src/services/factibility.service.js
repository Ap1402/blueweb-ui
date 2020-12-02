import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/factibility-requests";

//Access Admin
const getFactibilityRequests = async (query) => {
  const result = await axios
    .get(API_URL, {
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

const pendingFactibilityRequestsCount = async () => {
  const result = await axios
    .get(API_URL + "/count", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return err.response;
    });
  return result.data;
};

export default {
  pendingFactibilityRequestsCount,
  getFactibilityRequests,
};
