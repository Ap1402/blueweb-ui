export default function authHeader() {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return token;
    } else {
      return {};
    }
  } catch (err) {
    localStorage.remove("token");
  }
}
