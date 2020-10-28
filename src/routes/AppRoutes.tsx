import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../views/App';
import NoMatch from '../views/NoMatch';
import ResetPassword from '../views/ResetPassword';
import UserProfile from '../views/UserProfile';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Switch>
      <AuthRoutes path="/user/:userId">
        <UserProfile />
      </AuthRoutes>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
