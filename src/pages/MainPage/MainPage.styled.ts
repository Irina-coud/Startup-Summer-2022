import styled from 'styled-components';

import { MAIN_COLOR, WHITE } from 'appConstant/constants';

export const RepositoriesBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-width: 877px;
  width: 100%;
  gap: 20px;
`;

export const CountRepositories = styled.p`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  justify-content: flex-start;
`;

export const ListRepositories = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const ItemRepositories = styled.li`
  background-color: ${WHITE};
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 112px;
  border-radius: 5px;
  padding: 10px 32px;
  justify-content: center;
`;

export const NameRepository = styled.a`
  font-size: 24px;
  font-weight: 500;
  color: ${MAIN_COLOR};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DescriptionRepository = styled.p`
  font-size: 16px;
`;
