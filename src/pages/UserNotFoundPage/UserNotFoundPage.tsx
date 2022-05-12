import React from 'react';

import { Header } from 'common/Header/Header';
import {
  UserIcon,
  UserNotFoundPageContainer,
  UserNotFoundPageStyled,
  UserNotFoundPageText,
} from './UserNotFoundPage.styled';

export function UserNotFoundPage() {
  return (
    <React.Fragment>
      <Header />
      <UserNotFoundPageStyled>
        <UserNotFoundPageContainer>
          <UserIcon />
          <UserNotFoundPageText>User not found</UserNotFoundPageText>
        </UserNotFoundPageContainer>
      </UserNotFoundPageStyled>
    </React.Fragment>
  );
}
