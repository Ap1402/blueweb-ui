import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";
import Spinner from "../components/Spinner/Spinner";

function PrivateSupportRoute({
  component: Component,
  children,
  layout: Layout,
  ...rest
}) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await isAuthenticated();
      console.log(result)
      setIsAuth(result.isAuth);
      setRole(result.role);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        !loading ? (
          isAuth & (role === "admin" || role === "support") ? (
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

export default PrivateSupportRoute;
