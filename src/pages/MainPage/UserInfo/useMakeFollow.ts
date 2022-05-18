import users from 'assets/icon/users.svg';
import user from 'assets/icon/user.svg';

export function useMakeFollow(followers: number, following: number) {
  function transform(value: number) {
    const result =
      value > 1000000
        ? `${(value / 1000000).toFixed(1)}m`
        : value > 1000
        ? `${(value / 1000).toFixed(1)}k`
        : value;
    return result;
  }

  const isFollowers = {
    src: users,
    count: transform(followers) + 'followers',
    id: 1,
  };

  const isFollowing = {
    src: user,
    count: transform(following) + 'following',
    id: 2,
  };

  const follow = [isFollowers, isFollowing];

  return { follow: follow };
}
