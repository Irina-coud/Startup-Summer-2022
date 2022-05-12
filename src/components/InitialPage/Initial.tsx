import {
  InitualPageContainer,
  InitualPageStyled,
  InitualPageText,
  SearchIcon,
} from './Initual.styled';

export function InitualPage() {
  return (
    <InitualPageStyled>
      <InitualPageContainer>
        <SearchIcon />
        <InitualPageText>Start with searching a GitHub user</InitualPageText>
      </InitualPageContainer>
    </InitualPageStyled>
  );
}
