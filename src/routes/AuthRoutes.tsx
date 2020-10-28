import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

type IAuthRoutesProps = RouteProps;

const AuthRoutes: React.FC<IAuthRoutesProps> = ({ children, ...props }) => {
  const context = useContext(AuthContext);

  return (
    <Route
      {...props}
      render={({ location }) =>
        context?.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoutes;
