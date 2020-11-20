import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import authService from "../services/auth.service";

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
      const result = await authService.isAuthenticated();
      setIsAuth(result.isAuth);
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
            <Redirect to="/" />
          )
        ) : (
          <Spinner></Spinner>
        )
      }
    />
  );
}
export default PrivateRoute;
