import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserDetails, getUserRepos } from '../../services/userService';

import Avatar from '../../components/Avatar';
import RepoList from '../../components/RepoList';

function User() {
  const { username } = useParams();

  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  const fetchUser = useCallback(async () => {
    const response = await getUserDetails(username);
    setUserData(response);
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
    <div className="container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-lg-3">
          <h1>
            Github
            <span>Search</span>
          </h1>
        </div>

        <div className="col-lg-9">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" />
              <div className="input-group-append">
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <Avatar
            image={userData.avatar_url}
            name={userData.name}
            username={userData.login}
          />
        </div>

        <div className="col-lg-9">
          <RepoList data={userRepos} />
        </div>
      </div>
    </div>
  );
}

export default User;
