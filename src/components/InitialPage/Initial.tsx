import { Container, TextMessage, Wrapper } from 'styled/global';
import { Icon } from './Initual.styled';

export function InitualPage() {
  return (
    <Wrapper>
      <Container>
        <Icon />
        <TextMessage>Start with searching a GitHub user</TextMessage>
      </Container>
    </Wrapper>
  );
}
