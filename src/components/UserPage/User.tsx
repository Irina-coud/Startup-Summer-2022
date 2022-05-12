import React from 'react';

import {
  CountRepositories,
  DescriptionRepository,
  IconFollower,
  InfoBox,
  ItemRepositories,
  ListRepositories,
  NameRepository,
  RepositoriesBox,
  UserBox,
  UserDetails,
  UserFollowers,
  UserFollowing,
  UserName,
  UserNikname,
  UserPhoto,
  UserPhotoBox,
  Wrapper,
} from './User.styled';
import users from 'assets/icon/users.svg';
import user from 'assets/icon/user.svg';

export function User() {
  return (
    <React.Fragment>
      <Wrapper>
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
      </Wrapper>
    </React.Fragment>
  );
}
