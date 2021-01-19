import Axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/contact-messages";

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

const saveChatPreform = async (preformData, sentOnline) => {
  preformData.sentWhileOnline = sentOnline;
  const preformDataToSend = {};

  await preformData.questions.forEach((data, index) => {
    var backendKey;
    if (data.label === "Teléfono") {
      backendKey = "phone";
    }
    if (data.label === "Razón") {
      backendKey = "reason";
    }
    if (data.label === "Mensaje") {
      backendKey = "message";
    }
    if (data.label === "Correo electrónico") {
      backendKey = "email";
    }
    if (data.label === "Nombre") {
      backendKey = "name";
    }

    if (data.label === "Enviado desde") {
      backendKey = "sentFrom";
    }
    preformDataToSend[backendKey] = data.answer;
  });
  preformDataToSend.sentWhileOnline = sentOnline;
  const result = await Axios.post(
    API_URL + "/chatPreform",
    preformDataToSend
  ).catch((err) => {
    return;
  });

  return;
};

const getMessages = async (query) => {
  const result = await Axios.get(API_URL, {
    params: {
      page: query.page,
      size: query.size,
      wasAnswered: query.wasAnswered,
      dni: query.dni,
    },
    headers: {
      "x-auth-token": authHeader(),
    },
  }).catch((err) => {
    return err.response;
  });
  return result;
};

const getChatDataPreform = async (query) => {
  const result = await Axios.get(API_URL + "/chatPreform", {
    params: {
      page: query.page,
      size: query.size,
      wasAnswered: query.wasAnswered,
      sentWhileOnline: query.sentWhileOnline,
    },
    headers: {
      "x-auth-token": authHeader(),
    },
  }).catch((err) => {
    return err.response;
  });
  return result;
};

const getReasons = async () => {
  const result = await Axios.get(API_URL + "/reasons").catch((err) => {
    return err.response;
  });
  return result.data;
};

const getPendingMessagesCount = async () => {
  const result = await Axios.get(API_URL + "/count", {
    headers: {
      "x-auth-token": authHeader(),
    },
  }).catch((err) => {
    console.error(err.response);
    return 0;
  });
  return result.data;
};

export default {
  getPendingMessagesCount,
  createContactMessage,
  getMessages,
  getReasons,
  saveChatPreform,
  getChatDataPreform,
};
