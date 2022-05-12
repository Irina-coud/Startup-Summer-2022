import React from 'react';

import { GlobalStyle } from 'appConstant/global';
import { InitualPage } from 'pages/InitialPage/InitialPage';
import { UserNotFoundPage } from 'pages/UserNotFoundPage/UserNotFoundPage';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/* <InitualPage /> */}
      <UserNotFoundPage />
    </React.Fragment>
  );
}

export default App;
