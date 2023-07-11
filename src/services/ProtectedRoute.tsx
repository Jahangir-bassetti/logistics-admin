import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProtectedRouteProps {
  component: React.ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  let localData = JSON.parse(localStorage.getItem('user') || 'null');
  let localDataToken = JSON.parse(localStorage.getItem('sToken') || 'null');
  const auth = useSelector((state: RootState) => state.auth.value);

  const isAuth = (auth?.token && auth?.user) || (localData && localDataToken);
  return isAuth ? <Component /> : <Navigate to="/login" />;
};

interface RootState {
  auth: {
    value?: {
      token?: string;
      user?: string;
    };
  };
}
 