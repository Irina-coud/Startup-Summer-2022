import React from 'react';

import users from 'assets/icon/users.svg';
import user from 'assets/icon/user.svg';
import {
  IconFollower,
  InfoBox,
  UserBox,
  UserDetails,
  UserFollowers,
  UserFollowing,
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

export function User() {
  return (
    <React.Fragment>
      <UserWrapper>
        <UserBox>
          <UserPhotoBox>
            <UserPhoto />
          </UserPhotoBox>
          <UserDetails>
            <UserName>Dan Abramov</UserName>
            <UserNikname>gaearon</UserNikname>
          </UserDetails>
          <InfoBox>
            <IconFollower src={users} />
            <UserFollowers>65.8k followers</UserFollowers>
            <IconFollower src={user} />
            <UserFollowing>171 following</UserFollowing>
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
