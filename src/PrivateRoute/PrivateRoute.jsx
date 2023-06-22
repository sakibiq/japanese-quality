import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div
        class='w-28 h-28 rounded-full animate-spin
    border border-solid border-yellow-500 border-t-transparent mx-auto'
      ></div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
