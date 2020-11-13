import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";
import Spinner from "../components/Spinner/Spinner";

function PrivateRoute({
  component: Component,
  children,
  layout: Layout,
  ...rest
}) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await isAuthenticated();
      setIsAuth(result);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        !loading ? (
          isAuth ? (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          ) : (
            <Redirect to="/login" />
          )
        ) : (
          <Spinner></Spinner>
        )
      }
    />
  );
}
export default PrivateRoute;
