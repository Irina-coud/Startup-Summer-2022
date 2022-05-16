import { Header } from 'components/Header/Header';
import { InitualPage } from 'components/InitialPage/Initial';
import { UserNotRepositories } from 'components/UserNotRepositoriesPage/UserNotRepositories';
import { User } from 'components/UserPage/User';
import { UserNotFoundPage } from 'components/UserNotFoundPage/UserNotFound';
import { GlobalStyle } from 'styled/normalize';
import { service } from 'service/Service';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export function App() {
  return (
    <Provider store={store}>
      {/* <React.Fragment> */}
      <GlobalStyle />
      <Header />
      {/* <InitualPage /> */}
      {/* <UserNotFoundPage /> */}
      {/* <UserNotRepositories /> */}
      <User />
      {/* </React.Fragment> */}
    </Provider>
  );
}
