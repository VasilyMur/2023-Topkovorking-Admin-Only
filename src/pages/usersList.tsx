import { FC } from 'react';
import UsersFeature from '../features/UsersFeature';
import PrivateRoute from '../components/PrivateRoute';
import LayoutAdmin from '../components/LayoutAdmin';

const UsersListPage: FC = () => (
  <>
    <title>Пользователи</title>
    <PrivateRoute>
      <LayoutAdmin>
        <UsersFeature />
      </LayoutAdmin>
    </PrivateRoute>
  </>
);

export default UsersListPage;
