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

const createFactibilityRequest = async (request) => {
  const result = await axios
    .post(API_URL, request)
    .then((result) => {
      return {
        success: true,
        message:
          "Su solicitud de factibilidad ha sido enviada con exito, lo contactaremos pronto",
      };
    })
    .catch((err) => {
      return {
        success: false,
        message: "Hubo un problema registrando su solicitud de factibilidad",
      };
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
  createFactibilityRequest,
};
