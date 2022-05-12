import styled from 'styled-components';

import empty from '../../assets/icon/empty.svg';
import { GREY, MAIN_COLOR } from 'appConstant/constants';

export const Wrapper = styled.div`
  height: calc(100vh - 72px);
  padding: 40px 55px 30px 55px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 1220px) {
    justify-content: center;
    height: 100%;
    gap: 50px;
  }
`;
export const UserBox = styled.aside`
  display: flex;
  flex-direction: column;
`;
export const UserPhotoBox = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 280px;
  height: 280px;
  margin: 0 0 32px 0;
  background-color: red;
`;
export const UserPhoto = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const UserName = styled.p`
  font-weight: 600;
  font-size: 26px;
`;
export const UserNikname = styled.a`
  font-size: 18px;
  color: ${MAIN_COLOR};
  cursor: pointer;
`;
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserFollowers = styled.p`
  font-size: 16px;
`;
export const UserFollowing = styled.p`
  font-size: 16px;
`;
export const RepositoriesBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
  max-width: 820px;
  width: 100%;
`;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px 0 37px 0;
`;
export const EmptyIcon = styled.div`
  background: url(${empty}) no-repeat;
  height: 62px;
  width: 76px;
`;
export const IconFollower = styled.img`
  width: 24px;
  height: 24px;
`;
export const TextMessage = styled.p`
  color: ${GREY};
  font-size: 22px;
  text-align: center;
`;
