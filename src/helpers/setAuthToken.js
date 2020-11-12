export default function setAuthToken(data) {
  
  localStorage.setItem("token", JSON.stringify(data));


}
