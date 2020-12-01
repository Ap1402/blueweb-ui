import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl()+"/clients/";

const registerClient = async (client) => {
  const result = await axios
    .post(API_URL, client, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .then((result) => {
      return {
        success: true,
        message: "Cliente C.I/RIF " + result.data.dni + " creado correctamente",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const getClients = async (query) => {
  const result = await axios
    .get(API_URL, {
      params: {
        page: query.page,
        size: query.size,
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
  getClients,
};
