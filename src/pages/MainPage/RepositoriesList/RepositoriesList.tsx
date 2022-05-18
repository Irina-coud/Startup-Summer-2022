import { Pagination } from 'components/Paginate/Paginate';
import { useAppSelector } from 'store/hooks';
import {
  CountRepositories,
  DescriptionRepository,
  ItemRepositories,
  ListRepositories,
  NameRepository,
  RepositoriesBox,
} from '../MainPage.styled';

export function RepositoriesList() {
  const { public_repos } = useAppSelector((store) => store.reducer.userInfo);
  const { repInfo } = useAppSelector((store) => store.reducer);

  return (
    <RepositoriesBox>
      <CountRepositories>Repositories ({public_repos})</CountRepositories>
      <ListRepositories>
        {repInfo.map((rep) => (
          <ItemRepositories key={rep.id}>
            <NameRepository href={rep.html_url} target="_blank">
              {rep.name}
            </NameRepository>
            <DescriptionRepository>{rep.description}</DescriptionRepository>
          </ItemRepositories>
        ))}
      </ListRepositories>
      <Pagination />
    </RepositoriesBox>
  );
}
