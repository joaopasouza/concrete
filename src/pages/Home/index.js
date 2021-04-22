import React, { useContext, useState } from 'react';

import { UserContext } from '../../features/user';

import Search from '../../components/Search';

import { Container } from './styles';

function Home() {
  const { fetchUser } = useContext(UserContext);
  const [username, setUsername] = useState('');

  return (
    <Container>
      <Search
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onSubmit={async (e) => {
          e.preventDefault();
          fetchUser(username);
        }}
      />
    </Container>
  );
}

export default Home;
