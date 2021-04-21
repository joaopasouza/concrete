import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getUserDetails } from '../../services/userService';

import Search from '../../components/Search';

import { Container } from './styles';

function Home() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const fetchUser = useCallback(async () => {
    const response = await getUserDetails(username);
    if (response.login) {
      setError('');
      history.push(`/users/${response.login}`);
    } else {
      setError('Not found!!');
    }
  }, [username, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <Container>
      <Search
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onSubmit={handleSubmit}
      />

      {error && <p>{error}</p>}
    </Container>
  );
}

export default Home;
