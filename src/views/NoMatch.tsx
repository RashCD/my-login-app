import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const NoMatch = () => {
  const location = useLocation();

  return (
    <Layout className="flex justify-center items-center flex-col">
      <h3>Error 404</h3>
      <hr className="w-2/12 divide-x-2 my-3" />
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </Layout>
  );
};

export default NoMatch;
