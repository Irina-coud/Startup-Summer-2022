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
import { Pagination } from 'components/Paginate/Paginate';

export function MainPage() {
  const { name, userName, avatar, followers, following, public_repos } = useAppSelector(
    (store) => store.reducer.userInfo
  );
  const { repInfo } = useAppSelector((store) => store.reducer);

  function transform(value: number) {
    const result =
      value > 1000000
        ? `${(followers / 1000000).toFixed(1)}m`
        : value > 1000
        ? `${(followers / 1000).toFixed(1)}k`
        : value;
    return result;
  }

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
              {transform(followers)} followers
            </UserFollow>
            <UserFollow>
              <IconFollower src={user} />
              {transform(following)} following
            </UserFollow>
          </InfoBox>
        </UserBox>
        {repInfo.length > 0 ? (
          <RepositoriesBox>
            <CountRepositories>Repositories ({public_repos})</CountRepositories>
            <ListRepositories>
              {repInfo.map((rep) => (
                <ItemRepositories key={rep.id}>
                  <NameRepository>{rep.name}</NameRepository>
                  <DescriptionRepository>{rep.description}</DescriptionRepository>
                </ItemRepositories>
              ))}
            </ListRepositories>
            <Pagination />
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
