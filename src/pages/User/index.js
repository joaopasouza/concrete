import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import FormSearch from '../../components/FormSearch';
import Avatar from '../../components/Avatar';
import RepoList from '../../components/RepoList';
import UserInfo from '../../components/UserInfo';

import { UserContext } from '../../features/user';

function User() {
  const { username } = useParams();

  const { user, repositories, fetchUser, fetchUserRepositories } = useContext(
    UserContext,
  );

  useEffect(() => {
    fetchUser(username);
    fetchUserRepositories(username);
  }, [username, fetchUser, fetchUserRepositories]);

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mb-4 mt-4">
        <div className="col-lg-3">
          <Header title="Github" subTitle="Search" />
        </div>

        <div className="col-lg-9">
          <FormSearch />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <Avatar
            image={user.avatar_url}
            name={user.name}
            username={user.login}
          />

          <UserInfo user={user} />
        </div>

        <div className="col-lg-9">
          <RepoList data={repositories} />
        </div>
      </div>
    </div>
  );
}

export default User;
