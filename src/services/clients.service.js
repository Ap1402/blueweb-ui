import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/clients/";

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

const updateClient = async (clientData, clientId) => {
  const result = await axios
    .put(API_URL + clientId, clientData, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .then((result) => {
      return {
        success: true,
        message:
          "Cliente C.I/RIF " + result.data.dni + " actualizado correctamente",
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
        dni: query.dni,
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

const getCurrentLoggedClient = async (query) => {
  const result = await axios
    .get(API_URL + "me", {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return err.response;
    });
  return result.data;
};

const getClientById = async (id) => {
  const result = await axios
    .get(API_URL + id, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return err.response;
    });
  return result.data;
};

const updateClientSelf = async (values) => {
  const result = await axios
    .put(API_URL + "me", values, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .then((result) => {
      return {
        success: true,
        message: "Cliente actualizado correctamente",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

export default {
  registerClient,
  getCurrentLoggedClient,
  getClients,
  updateClientSelf,
  getClientById,
  updateClient,
};
