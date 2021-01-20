import Axios from "axios";

export const axios = Axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://blueweb-api.herokuapp.com"
      : "http://192.168.1.211:4000",
});
