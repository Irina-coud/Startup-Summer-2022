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
import { EmptyIcon, RepositoriesBox, TextMessage } from './UserNotRepositories.styled';
import { useAppSelector } from 'store/hooks';

export function UserNotRepositories() {
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
          <EmptyIcon />
          <TextMessage>Repository list is empty</TextMessage>
        </RepositoriesBox>
      </UserWrapper>
    </React.Fragment>
  );
}
