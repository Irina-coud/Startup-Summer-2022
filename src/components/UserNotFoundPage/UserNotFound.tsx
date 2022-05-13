import { Container, TextMessage, Wrapper } from 'styled/global';
import { Icon } from './UserNotFound.styled';

export function UserNotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <Icon />
        <TextMessage>User not found</TextMessage>
      </Container>
    </Wrapper>
  );
}
