import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserDetails, getUserRepos } from '../../services/userService';

function User() {
  const { username } = useParams();

  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState({});

  const fetchUser = useCallback(async () => {
    const response = await getUserDetails(username);
    if (response.login) {
      setUserData(response);
    }
  }, [username]);

  const fetchUserRepos = useCallback(async () => {
    const response = await getUserRepos(username);
    setUserRepos(response);
  }, [username]);

  useEffect(() => {
    fetchUser();
    fetchUserRepos();
  }, [username, fetchUser, fetchUserRepos]);

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>

      <div>
        <pre>{JSON.stringify(userRepos, null, 2)}</pre>
      </div>
    </div>
  );
}

export default User;
