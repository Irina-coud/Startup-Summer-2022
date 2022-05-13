import React from 'react';

import { Header } from 'components/Header/Header';
import { InitualPage } from 'components/InitialPage/Initial';
import { UserNotRepositories } from 'components/UserNotRepositoriesPage/UserNotRepositories';
import { User } from 'components/UserPage/User';
import { UserNotFoundPage } from 'components/UserNotFoundPage/UserNotFound';
import { GlobalStyle } from 'styled/normalize';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      {/* <InitualPage /> */}
      <UserNotFoundPage />
      {/* <UserNotRepositories /> */}
      {/* <User /> */}
    </React.Fragment>
  );
}
