import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from './features/user';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
