import { HeaderContainer, HeaderStyled, InputSearch, Logo } from './Header.styled';
import logo from '../../assets/icon/logo.svg';

export function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo src={logo} />
        <InputSearch type="search" placeholder="Enter GitHub username"></InputSearch>
      </HeaderContainer>
    </HeaderStyled>
  );
}
