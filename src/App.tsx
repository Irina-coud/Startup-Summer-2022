import React from 'react';

import { Header } from 'components/Header/Header';
import { InitualPage } from 'pages/InitialPage/InitialPage';
import { MainPage } from 'pages/MainPage/MainPage';
import { GlobalStyle } from 'styled/normalize';
import { useAppSelector } from 'store/hooks';
import { UserNotFoundPage } from 'pages/UserNotFoundPage/UserNotFoundPage';

export function App() {
  const { dataLoad, errorUser } = useAppSelector((store) => store.reducer);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      {!dataLoad ? !errorUser ? <InitualPage /> : <UserNotFoundPage /> : <MainPage />}
    </React.Fragment>
  );
}
