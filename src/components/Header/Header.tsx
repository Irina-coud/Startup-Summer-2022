import { ChangeEvent } from 'react';

import { HeaderContainer, HeaderStyled, InputSearch, Logo } from './Header.styled';
import logo from '../../assets/icon/logo.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updatePage, updateRepInfo, updateSearchValue, updateUserInfo } from 'store/mainSlice';
import { DEFAULT } from 'appConstant/constants';

export function Header() {
  const dispatch = useAppDispatch();
  const { userNameSearch } = useAppSelector((store) => store.reducer);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(event.target.value));
  };

  const hadleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(updatePage(DEFAULT));
      dispatch(updateUserInfo(userNameSearch));
      dispatch(updateRepInfo({ userNameSearch, page: DEFAULT }));
    }
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo src={logo} />
        <InputSearch
          type="search"
          value={userNameSearch}
          placeholder="Enter GitHub username"
          onKeyUp={hadleKeyDown}
          onChange={handleChange}
        ></InputSearch>
      </HeaderContainer>
    </HeaderStyled>
  );
}
