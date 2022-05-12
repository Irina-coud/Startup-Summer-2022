import { GlobalStyle } from 'appConstant/global';
import { Header } from 'components/Header/Header';
import { InitualPage } from 'components/InitialPage/InitialPage';
import { UserNotRepositories } from 'components/UserNotRepositoriesPage/UserNotRepositoriesPage';
import React from 'react';

// import { GlobalStyle } from 'appConstant/global';
// import { InitualPage } from 'pages/InitialPage/InitialPage';
// import { UserNotFoundPage } from 'pages/UserNotFoundPage/UserNotFoundPage';
// import { UserNotRepositories } from 'pages/UserNotRepositories/UserNotRepositories';
// import { Header } from 'common/Header/Header';

function App() {
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

export default App;
