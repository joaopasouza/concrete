import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function UserSearch({ name, value, onChange, onSubmit, ...props }) {
  return (
    <div className="search-container">
      <h1>
        <span>Github</span>
        <span>Search</span>
      </h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name={name}
          value={value}
          placeholder="Search for github username..."
          onChange={onChange}
          {...props}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

UserSearch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserSearch;
