const getEnvUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://blueweb-api.herokuapp.com";
  } else {
    return "http://192.168.1.211:4000";
  }
};

export default getEnvUrl;
