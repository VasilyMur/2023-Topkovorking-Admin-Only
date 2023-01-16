import { FC } from 'react';
import EditFeature from '../features/EditFeature';
import PrivateRoute from '../components/PrivateRoute';
import LayoutAdmin from '../components/LayoutAdmin';

const AdminPage: FC = () => (
  <>
    <title>Редактировать данные</title>
    <PrivateRoute>
      <LayoutAdmin>
        <EditFeature />
      </LayoutAdmin>
    </PrivateRoute>
  </>
);

export default AdminPage;
