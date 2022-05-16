import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { HeaderContainer, HeaderStyled, InputSearch, Logo } from './Header.styled';
import logo from '../../assets/icon/logo.svg';
import { useAppSelector } from 'store/hooks';
import { updateRepInfo, updateSearchValue, updateUserInfo } from 'store/mainSlice';
import { service } from 'service/Service';

export function Header() {
  const dispatch = useDispatch();
  const { userNameSearch } = useAppSelector((store) => store.reducer);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(event.target.value));
  };

  const hadleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const res = await service.getUser(userNameSearch);
      dispatch(updateUserInfo(res));
      const repo = await service.getRepo(userNameSearch);
      dispatch(updateRepInfo(repo));
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
