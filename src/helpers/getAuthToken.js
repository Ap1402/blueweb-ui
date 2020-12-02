export default function authHeader() {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return token;
    }
  } catch (err) {
    localStorage.removeItem("token");
  }
}
