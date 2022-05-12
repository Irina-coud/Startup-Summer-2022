import {
  UserIcon,
  UserNotFoundPageContainer,
  UserNotFoundPageStyled,
  UserNotFoundPageText,
} from './UserNotFoundPage.styled';

export function UserNotFoundPage() {
  return (
    <UserNotFoundPageStyled>
      <UserNotFoundPageContainer>
        <UserIcon />
        <UserNotFoundPageText>User not found</UserNotFoundPageText>
      </UserNotFoundPageContainer>
    </UserNotFoundPageStyled>
  );
}
