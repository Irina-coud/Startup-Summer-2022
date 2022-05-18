import { Container, TextMessage, Wrapper } from 'styled/global';
import { Icon } from './InitialPage.styled';

export function InitialPage() {
  return (
    <Wrapper>
      <Container>
        <Icon />
        <TextMessage>Start with searching a GitHub user</TextMessage>
      </Container>
    </Wrapper>
  );
}
