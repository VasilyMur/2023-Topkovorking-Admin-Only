import { FC } from 'react';
import AdminFeature from '../features/AdminFeature';
import PrivateRoute from '../components/PrivateRoute';
import LayoutAdmin from '../components/LayoutAdmin';

const AdminPage: FC = () => (
  <>
    <title>Страница администратора</title>
    <PrivateRoute>
      <LayoutAdmin>
        <AdminFeature />
      </LayoutAdmin>
    </PrivateRoute>
  </>
);

export default AdminPage;
