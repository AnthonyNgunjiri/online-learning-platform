import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

const PrivateRoute = ({ redirectTo }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
