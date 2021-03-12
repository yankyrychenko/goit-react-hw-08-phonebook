const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUsername,
};
