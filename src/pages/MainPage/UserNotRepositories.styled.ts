import styled from 'styled-components';

import empty from '../../assets/icon/empty.svg';
import { GREY } from 'appConstant/constants';

export const RepositoriesEmptyBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
  max-width: 820px;
  width: 100%;
`;

export const EmptyIcon = styled.div`
  background: url(${empty}) no-repeat;
  height: 62px;
  width: 76px;
`;

export const TextMessage = styled.p`
  color: ${GREY};
  font-size: 22px;
  text-align: center;
`;
