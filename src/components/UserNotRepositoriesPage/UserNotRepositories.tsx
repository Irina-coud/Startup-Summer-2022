import React from 'react';

import {
  EmptyIcon,
  InfoBox,
  RepositoriesBox,
  TextMessage,
  UserBox,
  UserDetails,
  UserFollowers,
  UserFollowing,
  UserName,
  UserNikname,
  UserPhoto,
  UserPhotoBox,
  Wrapper,
} from './UserNotRepositories.styled';

export function UserNotRepositories() {
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
            <UserFollowers>65.8k followers</UserFollowers>
            <UserFollowing>171 following</UserFollowing>
          </InfoBox>
        </UserBox>
        <RepositoriesBox>
          <EmptyIcon />
          <TextMessage>Repository list is empty</TextMessage>
        </RepositoriesBox>
      </Wrapper>
    </React.Fragment>
  );
}
