import includes from 'lodash/includes';

export default (requiredRoles, currentRole) => {
  return includes(requiredRoles, currentRole);
};
