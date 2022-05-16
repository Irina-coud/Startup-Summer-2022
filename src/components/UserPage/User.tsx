import React from 'react';

import users from 'assets/icon/users.svg';
import user from 'assets/icon/user.svg';
import {
  IconFollower,
  InfoBox,
  UserBox,
  UserDetails,
  UserFollow,
  UserName,
  UserNikname,
  UserPhoto,
  UserPhotoBox,
  UserWrapper,
} from 'styled/global';
import {
  CountRepositories,
  DescriptionRepository,
  ItemRepositories,
  ListRepositories,
  NameRepository,
  RepositoriesBox,
} from './User.styled';
import { useAppSelector } from 'store/hooks';

export function User() {
  const { name, userName, avatar, followers, following } = useAppSelector(
    (store) => store.reducer.userInfo
  );

  return (
    <React.Fragment>
      <UserWrapper>
        <UserBox>
          <UserPhotoBox>
            <UserPhoto src={avatar} />
          </UserPhotoBox>
          <UserDetails>
            <UserName>{name}</UserName>
            <UserNikname>{userName}</UserNikname>
          </UserDetails>
          <InfoBox>
            <UserFollow>
              <IconFollower src={users} />
              {followers} followers
            </UserFollow>
            <UserFollow>
              <IconFollower src={user} />
              {following} following
            </UserFollow>
          </InfoBox>
        </UserBox>
        <RepositoriesBox>
          <CountRepositories>Repositories (249)</CountRepositories>
          <ListRepositories>
            <ItemRepositories>
              <NameRepository>whatthefuck.is</NameRepository>
              <DescriptionRepository>
                An opinionated glossary of computer science terms for front-end developers. Written
                by Dan Abramov.
              </DescriptionRepository>
            </ItemRepositories>
            <ItemRepositories>
              <NameRepository>whatthefuck.is</NameRepository>
              <DescriptionRepository>
                An opinionated glossary of computer science terms for front-end developers. Written
                by Dan Abramov.
              </DescriptionRepository>
            </ItemRepositories>
            <ItemRepositories>
              <NameRepository>whatthefuck.is</NameRepository>
              <DescriptionRepository>
                An opinionated glossary of computer science terms for front-end developers. Written
                by Dan Abramov.
              </DescriptionRepository>
            </ItemRepositories>
            <ItemRepositories>
              <NameRepository>whatthefuck.is</NameRepository>
              <DescriptionRepository>
                An opinionated glossary of computer science terms for front-end developers. Written
                by Dan Abramov.
              </DescriptionRepository>
            </ItemRepositories>
          </ListRepositories>
        </RepositoriesBox>
      </UserWrapper>
    </React.Fragment>
  );
}
