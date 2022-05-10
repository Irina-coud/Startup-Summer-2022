import styled from 'styled-components';

import { MAIN_COLOR, WHITE } from 'appConstant/constants';

import logo from '../../assets/icon/logo.svg';
import search from '../../assets/icon/search.svg';

export const HeaderStyled = styled.header`
  background-color: ${MAIN_COLOR};
  height: 72px;
  padding: 0 40px;
`;
export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  max-width: 560px;
  width: 100%;
  justify-content: space-between;
`;
export const Logo = styled.div`
  height: 40px;
  width: 45px;
  background: url(${logo}) no-repeat;
`;
export const InputSearch = styled.input`
  background: ${WHITE} url(${search}) 20px 50% / 14px 14px no-repeat;
  padding: 0 45px;
  height: 40px;
  max-width: 500px;
  width: 100%;
  border-radius: 5px;
`;
