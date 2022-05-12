import React from 'react';

import {
  EmptyIcon,
  IconFollower,
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
import users from 'assets/icon/users.svg';
import user from 'assets/icon/user.svg';

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
            <IconFollower src={users} />
            <UserFollowers>65.8k followers</UserFollowers>
            <IconFollower src={user} />
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
