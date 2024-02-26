import values from 'lodash/values';

import authenticate from './authenticate';
import { USER_ROLES } from '../config/constants';

const userRoles = values(USER_ROLES);

export default function accessControl(role) {
  if (!role) {
    throw new Error('Provide a role.');
  }

  const requiredRoleIndex = userRoles.indexOf(role);

  if (requiredRoleIndex < 0) {
    throw new Error('Not a valid role.');
  }

  return (req, res, next) =>
    authenticate(req, res, (err) => {
      const currentRoleIndex = userRoles.indexOf(req.currentUser.role);

      if (err || !req.currentUser || currentRoleIndex < requiredRoleIndex) {
        res.sendStatus(403);
        return;
      }

      next();
    });
}
