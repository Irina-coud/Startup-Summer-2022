import {
  IconFollower,
  InfoBox,
  UserBox,
  UserDetails,
  UserFollow,
  UserName,
  UserNickname,
  UserPhoto,
  UserPhotoBox,
} from 'styled/global';

import { useAppSelector } from 'store/hooks';
import { useMakeFollow } from './useMakeFollow';

export function UserInfo() {
  const { name, userName, avatar, followers, following, html_url } = useAppSelector(
    (store) => store.reducer.userInfo
  );

  const { follow } = useMakeFollow(followers, following);

  return (
    <UserBox>
      <UserPhotoBox>
        <UserPhoto src={avatar} />
      </UserPhotoBox>
      <UserDetails>
        <UserName>{name}</UserName>
        <UserNickname href={html_url} target="_blank">
          {userName}
        </UserNickname>
      </UserDetails>
      <InfoBox>
        {follow.map((item) => (
          <UserFollow key={item.id}>
            <IconFollower src={item.src} />
            {item.count}
          </UserFollow>
        ))}
      </InfoBox>
    </UserBox>
  );
}
