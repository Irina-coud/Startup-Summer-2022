import styled from 'styled-components';

import { GREY } from 'appConstant/constants';

import search from '../../assets/icon/search.svg';

export const InitualPageStyled = styled.div`
  height: calc(100vh - 72px);
`;
export const InitualPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 45px;
`;
export const SearchIcon = styled.div`
  background: url(${search}) no-repeat;
  height: 65px;
  width: 65px;
`;
export const InitualPageText = styled.p`
  color: ${GREY};
  font-size: 22px;
  max-width: 210px;
  text-align: center;
`;
