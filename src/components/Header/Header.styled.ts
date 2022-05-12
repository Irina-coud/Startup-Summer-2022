import styled from 'styled-components';

import { MAIN_COLOR, WHITE } from 'appConstant/constants';

import search from '../../assets/icon/search.svg';

export const HeaderStyled = styled.header`
  background-color: ${MAIN_COLOR};
  height: 72px;
  padding: 0 20px 0 40px;
`;
export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 560px;
  width: 100%;
  gap: 15px;
  justify-content: space-between;
`;
export const Logo = styled.img`
  height: 40px;
  width: 41px;
`;
export const InputSearch = styled.input`
  background: ${WHITE} url(${search}) 20px 50% / 14px 14px no-repeat;
  padding: 0 0 0 45px;
  height: 40px;
  flex-basis: 500px;
  width: 100%;
  border-radius: 5px;
`;
