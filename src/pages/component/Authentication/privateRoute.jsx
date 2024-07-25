import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

const PrivateRoute = ({ roles, redirectTo }) => {
  const { isLoggedIn, role } = useContext(AuthContext);

  if (!isLoggedIn || (roles && !roles.includes(role))) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;