import React from 'react';

import { GlobalStyle } from 'appConstant/global';
import { Header } from 'components/Header/Header';
import { InitualPage } from 'components/InitialPage/Initial';
import { UserNotRepositories } from 'components/UserNotRepositoriesPage/UserNotRepositories';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      {/* <InitualPage /> */}
      {/* <UserNotFoundPage /> */}
      <UserNotRepositories />
    </React.Fragment>
  );
}
