import Axios from "axios";
import authHeader from "./getAuthToken";

export default async function isAuthenticated() {
  const result = await Axios.get(
    "http://localhost:4000/api/auth/validateToken",
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  ).catch((err) => {
    localStorage.removeItem("token");
    return {
      isAuth: false,
      role: null,
      id: null,
    };
  });

  if (result.status === 200) {
    return {
      isAuth: true,
      role: result.data.user.role,
      id: result.data.user.id,
    };
  } else {
    return result;
  }
}
