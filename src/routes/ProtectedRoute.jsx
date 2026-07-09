import React from "react";
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoute = ({
  allowedRoles = [],
  requiredPermissions = [],
}) => {

  const location = useLocation();

  const {
    isAuthenticated,
    role,
    permissions,
    token,
  } = useSelector((state) => state.auth);

  /*
  |--------------------------------------------------------------------------
  | Not Logged In
  |--------------------------------------------------------------------------
  */

  if (!isAuthenticated || !token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Role Check
  |--------------------------------------------------------------------------
  */

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(role)
  ) {
    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Permission Check
  |--------------------------------------------------------------------------
  */

  if (requiredPermissions.length > 0) {

    const hasPermission =
      requiredPermissions.every((permission) =>
        permissions.includes(permission)
      );

    if (!hasPermission) {
      return (
        <Navigate
          to="/unauthorized"
          replace
        />
      );
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Authorized
  |--------------------------------------------------------------------------
  */

  return <Outlet />;
};

export default ProtectedRoute;