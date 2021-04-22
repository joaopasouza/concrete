/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../RepoItem';

function RepoList({ data }) {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <RepoItem
            key={item.id}
            title={item.name}
            description={item.description}
            star={item.stargazers_count}
          />
        ))}
      </ul>
    </div>
  );
}

RepoList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RepoList;
