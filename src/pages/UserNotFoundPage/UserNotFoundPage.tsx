import { Container, TextMessage, Wrapper } from 'styled/global';
import { Icon } from './UserNotFoundPage.styled';

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
