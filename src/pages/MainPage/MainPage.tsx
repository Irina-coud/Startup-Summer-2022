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
} from './MainPage.styled';
import { useAppSelector } from 'store/hooks';
import {
  EmptyIcon,
  RepositoriesEmptyBox,
  TextMessage,
} from 'pages/MainPage/UserNotRepositories.styled';

export function MainPage() {
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
        {repInfo.length > 0 ? (
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
        ) : (
          <RepositoriesEmptyBox>
            <EmptyIcon />
            <TextMessage>Repository list is empty</TextMessage>
          </RepositoriesEmptyBox>
        )}
      </UserWrapper>
    </React.Fragment>
  );
}
