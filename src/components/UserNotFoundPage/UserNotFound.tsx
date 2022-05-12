import {
  UserIcon,
  UserNotFoundPageContainer,
  UserNotFoundPageStyled,
  UserNotFoundPageText,
} from './UserNotFound.styled';

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
