import React, { useContext, useState } from 'react';

import { UserContext } from '../../features/user';

import { Button } from './styles';

function FormSearch() {
  const { fetchUser } = useContext(UserContext);

  const [username, setUsername] = useState('');

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        fetchUser(username);
      }}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="input-group-append">
          <Button type="submit" className="btn">
            <i className="fas fa-search" />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default FormSearch;
