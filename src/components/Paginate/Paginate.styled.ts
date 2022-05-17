import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import left from 'assets/icon/left.svg';
import leftDis from 'assets/icon/left-dis.svg';
import right from 'assets/icon/right.svg';
import rightDis from 'assets/icon/right-dis.svg';
import { GREY, MAIN_COLOR, WHITE } from 'appConstant/constants';

export const WrapperPaginate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-right: 45px;
  @media (max-width: 470px) {
    flex-direction: column;
    gap: 15px;
    margin: 0px;
  }
`;

export const PaginateInfo = styled.p`
  margin-right: 16px;
  color: ${GREY};
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .paginateActive {
    display: flex;
    justify-content: center;
    padding: 2px;
    width: 21px;
    height: 25px;
    background: ${MAIN_COLOR};
    border-radius: 3px;
    color: ${WHITE};
  }
  .paginatePrev,
  .paginateNext {
    display: block;
    width: 7px;
    height: 12px;
    color: transparent;
  }
  .paginatePrev {
    background: url(${left}) no-repeat;
  }
  .paginatePrev.disabled {
    background: url(${leftDis}) no-repeat;
    cursor: default;
  }
  .paginateNext {
    background: url(${right}) no-repeat;
  }
  .paginateNext.disabled {
    background: url(${rightDis}) no-repeat;
    cursor: default;
  }

  li {
    cursor: pointer;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
