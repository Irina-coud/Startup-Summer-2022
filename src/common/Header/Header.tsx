import { HeaderContainer, HeaderStyled, InputSearch, Logo } from './Header.styled';

export function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <InputSearch type="search"></InputSearch>
      </HeaderContainer>
    </HeaderStyled>
  );
}
