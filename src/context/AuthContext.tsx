import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import userData from '../user/UserData';

type AuthContextProps = {
  loginUser: ({
    userId,
    password,
  }: {
    userId: string;
    password: string;
  }) => Promise<any>;
  logoutUser: () => void;
  isAuthenticated: boolean | undefined;
};

export const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined
);

const cookies = new Cookies();

export const AuthContextProvider: React.FC<{}> = (props) => {
  const [userInfo, setUserInfo] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (cookies.get('uid')) {
      setIsAuthenticated(true);
    } else if (userInfo) {
      setIsAuthenticated(true);
      return cookies.set('uid', userInfo);
    } else {
      setIsAuthenticated(false);
      return cookies.remove('uid');
    }
  }, [userInfo]);

  const loginUser: AuthContextProps['loginUser'] = ({ userId, password }) => {
    return new Promise((resolve, reject) => {
      const userIndex = userData.findIndex((data) => data.userId === userId);

      if (userIndex === -1) {
        return reject(new Error('No user found'));
      }

      const isPasswordTrue = userData[userIndex].password === password;

      if (!isPasswordTrue) {
        return reject(new Error('No user found'));
      }

      if (userIndex !== -1 && isPasswordTrue) {
        setUserInfo(userId);
        return resolve({
          message: 'User found',
          userId,
        });
      }
    });
  };

  const logoutUser = () => {
    setUserInfo('');
    cookies.remove('uid');
    document.cookie = 'uid=; Max-Age=0; path=/; domain=';
    return;
  };

  const implementation = {
    loginUser,
    logoutUser,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={implementation}>
      {isAuthenticated !== undefined && props.children}
    </AuthContext.Provider>
  );
};
