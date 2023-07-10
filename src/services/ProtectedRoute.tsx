import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRouteProps, RootState } from '../interface/ProtectedRouteInterface';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  let localData = JSON.parse(localStorage.getItem('user') || 'null');
  let localDataToken = JSON.parse(localStorage.getItem('sToken') || 'null');
  const auth = useSelector((state: RootState) => state.auth.value);

  const isAuth = (auth?.token && auth?.user) || (localData && localDataToken);
  return isAuth ? <Component /> : <Navigate to="/login" />;
};
 