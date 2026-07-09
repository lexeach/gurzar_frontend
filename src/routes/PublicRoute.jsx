import React from "react";
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { useSelector } from "react-redux";

const PublicRoute = () => {
  const location = useLocation();

  const { isAuthenticated, token } = useSelector(
    (state) => state.auth
  );

  /*
  |--------------------------------------------------------------------------
  | User Already Logged In
  |--------------------------------------------------------------------------
  */

  if (isAuthenticated && token) {
    const redirectTo =
      location.state?.from?.pathname || "/";

    return (
      <Navigate
        to={redirectTo}
        replace
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Public Pages
  |--------------------------------------------------------------------------
  */

  return <Outlet />;
};

export default PublicRoute;