import { EmptyIcon, RepositoriesEmptyBox, TextMessage } from './RepositoriesEmpty.styled';

export function RepositoriesEmpty() {
  return (
    <RepositoriesEmptyBox>
      <EmptyIcon />
      <TextMessage>Repository list is empty</TextMessage>
    </RepositoriesEmptyBox>
  );
}
