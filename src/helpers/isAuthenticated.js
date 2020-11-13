import Axios from "axios";
import authHeader from "./getAuthToken";

export default async function isAuthenticated() {
  const result = await Axios.get(
    "http://localhost:4000/api/users/validateToken",
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  ).catch((err) => {
    localStorage.removeItem("token");
    return false;
  });
  if (result.status === 200) {
    return true;
  }
}
