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
  const { repInfo } = useAppSelector((store) => store.reducer);

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
          <CountRepositories>Repositories ({repInfo.length})</CountRepositories>
          <ListRepositories>
            {repInfo.map((rep) => (
              <ItemRepositories key={rep.id}>
                <NameRepository>{rep.name}</NameRepository>
                <DescriptionRepository>{rep.description}</DescriptionRepository>
              </ItemRepositories>
            ))}
          </ListRepositories>
        </RepositoriesBox>
      </UserWrapper>
    </React.Fragment>
  );
}
