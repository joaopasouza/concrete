import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { getUserDetails, getUserRepos } from '../services/userService';

export const UserContext = createContext({
  user: {},
  repositories: [],
  fetchUser: async (f) => f,
  fetchUserRepositories: async (f) => f,
});

function UserProvider({ children }) {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  const fetchUser = useCallback(
    async (username) => {
      const response = await getUserDetails(username);
      if (response.login) {
        setUser(response);
        history.push(`/users/${response.login}`);
      } else {
        history.push('/notFound');
      }
    },
    [history],
  );

  const fetchUserRepositories = useCallback(async (username) => {
    const response = await getUserRepos(username);
    setRepositories(response);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, repositories, fetchUser, fetchUserRepositories }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
