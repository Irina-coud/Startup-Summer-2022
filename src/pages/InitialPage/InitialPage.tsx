import React from 'react';

import { Header } from 'common/Header/Header';
import {
  InitualPageContainer,
  InitualPageStyled,
  InitualPageText,
  SearchIcon,
} from './InitualPage.styled';

export function InitualPage() {
  return (
    <React.Fragment>
      <Header />
      <InitualPageStyled>
        <InitualPageContainer>
          <SearchIcon />
          <InitualPageText>Start with searching a GitHub user</InitualPageText>
        </InitualPageContainer>
      </InitualPageStyled>
    </React.Fragment>
  );
}
