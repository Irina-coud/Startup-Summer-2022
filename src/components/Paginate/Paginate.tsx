import { useEffect, useState } from 'react';

import { PER_PAGE } from 'appConstant/constants';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updatePage, updateRepInfo } from 'store/mainSlice';
import { Paginate, PaginateInfo, WrapperPaginate } from './Paginate.styled';

export function Pagination() {
  const dispatch = useAppDispatch();
  const { userNameSearch, page, userInfo } = useAppSelector((store) => store.reducer);
  const [startPage, setStartPage] = useState(1);

  const pageCount = Math.ceil(userInfo.public_repos / PER_PAGE);

  useEffect(() => {
    dispatch(updateRepInfo({ userNameSearch, page }));
  }, [page]);

  const onChange = (event: { selected: number }) => {
    const newStart = event.selected * PER_PAGE + 1;
    setStartPage(newStart);
    dispatch(updatePage(event.selected + 1));
  };

  return (
    <WrapperPaginate>
      <PaginateInfo>{`${startPage} - ${startPage + PER_PAGE - 1}  of ${
        userInfo.public_repos
      } items`}</PaginateInfo>
      <Paginate
        breakLabel="..."
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={onChange}
        activeClassName="paginateActive"
        nextClassName="paginateNext"
        previousClassName="paginatePrev"
        previousLabel="<"
        nextLabel=">"
      />
    </WrapperPaginate>
  );
}
