/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
// import { Result, Button } from 'antd';
import Error from '../Error';

import { USER_ROLES, ROLE_STAFF } from '../../configs';
import authState from '../../atoms/auth';
// import { Error } from '../../utils/notifications';

const RouterRequireAuth = ({ component: Component, role, ...rest }) => {
  const auth = useRecoilValue(authState);
  const history = useHistory();
  const requiredRoleIndex = USER_ROLES.indexOf(role);
  const currentRoleIndex = USER_ROLES.indexOf(auth.role);
  if (requiredRoleIndex < 0 || currentRoleIndex < requiredRoleIndex) {
    return (
      <Error
      // status="403"
      // title="403"
      // subTitle="Sorry, you are not authorized to access this page."
      // extra={
      //   <Button onClick={() => history.push('/')} type="primary">
      //     Back Home
      //   </Button>
      // }
      />
    );
  }
  return (
    <Route
      render={(props) => {
        if (auth._id) {
          return <Component {...props} />;
          // Error(
          //   'Không thể truy cập',
          //   'Tài khoản của bạn không có quyền truy cập trang này'
          // );
          // logout();
        }
        return <Redirect to="/" />;
      }}
      {...rest}
    />
  );
};

RouterRequireAuth.defaultProps = {
  role: ROLE_STAFF,
};

RouterRequireAuth.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  role: PropTypes.string,
};

export default RouterRequireAuth;
