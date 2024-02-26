import React from 'react';

import Layout from '../components/Layout';

const withLayout = (Component) => {
  const ComposedComponent = ({ chidren }) => {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };
  return ComposedComponent;
};

export default withLayout;
