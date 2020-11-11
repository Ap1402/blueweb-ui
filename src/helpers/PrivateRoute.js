import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import isAuthenticated from "./isAuthenticated";

async function PrivateRoute({component: Component, children}) {
  const hola = await isAuthenticated();

  if (hola === true) {
    return <Route {...children} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="login" />;
}

export default PrivateRoute;
