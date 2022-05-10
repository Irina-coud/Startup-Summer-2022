import React from 'react';

import { GlobalStyle } from 'appConstant/global';
import { Header } from 'common/Header/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
    </React.Fragment>
  );
}

export default App;
