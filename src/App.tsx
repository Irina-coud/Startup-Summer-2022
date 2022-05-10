import React from 'react';

import { GlobalStyle } from 'appConstant/global';
import { InitualPage } from 'pages/InitialPage/InitialPage';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <InitualPage />
    </React.Fragment>
  );
}

export default App;
