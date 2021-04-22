import React from 'react';

import { ReactComponent as OrganizationIcon } from '../../assets/icons/organization.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { ReactComponent as RepositoryIcon } from '../../assets/icons/repository.svg';
import { ReactComponent as FollowersIcon } from '../../assets/icons/followers.svg';

function UserInfo() {
  return (
    <div>
      <div>
        <OrganizationIcon />
        <span>The Galactic empire</span>
      </div>

      <div>
        <LocationIcon />
        <span>Tatooine</span>
      </div>

      <div>
        <StarIcon />
        <span>1000000</span>
      </div>

      <div>
        <RepositoryIcon />
        <span>6</span>
      </div>

      <div>
        <FollowersIcon />
        <span>1000</span>
      </div>
    </div>
  );
}

export default UserInfo;
