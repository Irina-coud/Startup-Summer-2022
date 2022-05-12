import styled from 'styled-components';

import { GREY } from 'appConstant/constants';

import userNotFound from '../../assets/icon/userNotFound.svg';

export const UserNotFoundPageStyled = styled.div`
  height: calc(100vh - 72px);
`;
export const UserNotFoundPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 45px;
`;
export const UserIcon = styled.div`
  background: url(${userNotFound}) no-repeat;
  height: 65px;
  width: 65px;
`;
export const UserNotFoundPageText = styled.p`
  color: ${GREY};
  font-size: 22px;
  max-width: 210px;
  text-align: center;
`;
