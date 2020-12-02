const getEnvUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://blueweb-api.herokuapp.com";
  } else {
    return "http://localhost:4000";
  }
};

export default getEnvUrl;
