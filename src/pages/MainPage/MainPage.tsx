import React from 'react';

import { UserWrapper } from 'styled/global';
import { useAppSelector } from 'store/hooks';
import { UserInfo } from './UserInfo/UserInfo';
import { RepositoriesList } from './RepositoriesList/RepositoriesList';
import { RepositoriesEmpty } from './RepositoriesEmpty/RepositoriesEmpty';

export function MainPage() {
  const { public_repos } = useAppSelector((store) => store.reducer.userInfo);

  return (
    <React.Fragment>
      <UserWrapper>
        <UserInfo />
        {public_repos ? <RepositoriesList /> : <RepositoriesEmpty />}
      </UserWrapper>
    </React.Fragment>
  );
}
