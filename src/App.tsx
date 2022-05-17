import React from 'react';

import { Header } from 'components/Header/Header';
import { InitualPage } from 'pages/InitialPage/InitialPage';
import { MainPage } from 'pages/MainPage/MainPage';
import { GlobalStyle } from 'styled/normalize';
import { useAppSelector } from 'store/hooks';
import { UserNotFoundPage } from 'pages/UserNotFoundPage/UserNotFoundPage';
import { Spinner } from 'components/Spinner/Spinner';

export function App() {
  const { dataLoad, errorUser, statusLoad } = useAppSelector((store) => store.reducer);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      {!dataLoad ? (
        !errorUser ? (
          statusLoad === 'pending' ? (
            <Spinner />
          ) : (
            <InitualPage />
          )
        ) : (
          <UserNotFoundPage />
        )
      ) : (
        <MainPage />
      )}
    </React.Fragment>
  );
}
