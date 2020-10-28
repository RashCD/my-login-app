import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';

interface ParamTypes {
  userId: string;
}

const UserProfile = () => {
  const { userId } = useParams<ParamTypes>();
  const context = useContext(AuthContext);
  const history = useHistory();

  return (
    <Layout className="flex justify-center items-center flex-col">
      <p>Hello {userId} !!</p>
      <button
        className="bg-white border-2 border-gray-400 mt-10 rounded-lg w-1/5"
        onClick={() => {
          context?.logoutUser();
          history.push('/');
        }}
      >
        Sign Out
      </button>
    </Layout>
  );
};

export default UserProfile;
