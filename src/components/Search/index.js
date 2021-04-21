import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Button } from './styles';

function Search({ name, value, onChange, onSubmit, ...props }) {
  return (
    <Container>
      <Title>
        Github
        <span>Search</span>
      </Title>

      <form onSubmit={onSubmit}>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="username"
            name={name}
            value={value}
            onChange={onChange}
            {...props}
          />
          <div className="input-group-append">
            <Button type="submit" className="btn">
              <i className="fas fa-search" />
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

Search.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
