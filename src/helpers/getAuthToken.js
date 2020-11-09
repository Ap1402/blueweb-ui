export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
  
    if (token && token) {
      return { Authorization: 'X-auth-token ' + token };
    } else {
      return {};
    }
  }