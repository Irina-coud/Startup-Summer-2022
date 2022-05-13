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
import { EmptyIcon, RepositoriesBox, TextMessage } from './UserNotRepositories.styled';

export function UserNotRepositories() {
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
          <EmptyIcon />
          <TextMessage>Repository list is empty</TextMessage>
        </RepositoriesBox>
      </UserWrapper>
    </React.Fragment>
  );
}
