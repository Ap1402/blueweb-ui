import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl()+"/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};


//Access Admin
const getFactibilityRequests = async (query) => {
  const result = await axios
    .get(getEnvUrl()+"/api/factibility/", {
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

const pendingFactibilityRequestsCount = async ()=>{

 const result=  await axios.get(
  getEnvUrl()+"/api/factibility/count",
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  ).catch((err) => {
    return err.response;
  });
  return result.data
}
export default {
  pendingFactibilityRequestsCount,
  register,
  getFactibilityRequests
};
