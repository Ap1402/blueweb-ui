import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://192.168.1.211:4000/api/clients/";

const registerClient = async (client) => {
  const result = await axios
    .post(API_URL+'register', client, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .catch((err) => {
      return { success: false, message: result.response.data, sent: true };
    });
    return {
      success: true,
      message: "Cliente creado con exito",
      data: result.data,
      sent: true,
    };
};



export default {
  registerClient,
};
