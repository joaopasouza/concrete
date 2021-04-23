import React from 'react';
import PropTypes from 'prop-types';

import { List } from './styles';

import organizationIcon from '../../assets/icons/organization.png';
import locationIcon from '../../assets/icons/location.png';
import followersIcon from '../../assets/icons/followers.png';
import repositoriesIcon from '../../assets/icons/repositories.png';

function UserInfo({ user }) {
  return (
    <div>
      <List>
        <li>
          <img src={organizationIcon} alt="organization_icon" />
          <span>{user.company ? user.company : 'No Organization'}</span>
        </li>

        <li>
          <img src={locationIcon} alt="location_icon" />
          <span>{user.location}</span>
        </li>

        <li>
          <img src={repositoriesIcon} alt="repositories_icon" />
          <span>{user.public_repos}</span>
        </li>

        <li>
          <img src={followersIcon} alt="followers_icon" />
          <span>{user.followers}</span>
        </li>
      </List>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.objectOf({}).isRequired,
};

export default UserInfo;
