/* eslint-disable react/jsx-props-no-spreading, react/jsx-curly-newline */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';

import authState from '../../atoms/auth';

const RouterRequireUnAuth = ({ component: Component, ...rest }) => {
  const auth = useRecoilValue(authState);
  console.log('auth', auth);
  return (
    <Route
      render={(props) =>
        auth._id ? <Redirect to="/users" /> : <Component {...props} />
      }
      {...rest}
    />
  );
};

RouterRequireUnAuth.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default RouterRequireUnAuth;
