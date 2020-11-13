export default function authHeader() {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return token.token;
    }
  } catch (err) {
    console.log(err);
    localStorage.removeItem("token");
  }
}
