import Axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://localhost:4000/api/clients/messages";

const createContactMessage = async (requestData) => {
  const result = await Axios.post(API_URL, requestData).catch((err) => {
    return { success: false, message: result.response.data, sent: true };
  });
  return {
    success: true,
    message: "Mensaje creado con exito, nos pondremos en contacto con usted",
    data: result.data,
    sent: true,
  };
};

const getMessages = async (query) => {
  const result = await Axios.get(API_URL, {
    params: {
      page: query.page,
      size: query.size,
      wasAnswered: query.wasAnswered,
    },
    headers: {
      "x-auth-token": authHeader(),
    },
  }).catch((err) => {
    return err.response;
  });
  return result;
};

export default {
  createContactMessage,
  getMessages,
};
