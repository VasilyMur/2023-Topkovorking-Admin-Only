import { FC } from 'react';
import EditFeature from '../features/EditFeature';
import PrivateRoute from '../components/PrivateRoute';
import LayoutAdmin from '../components/LayoutAdmin';

const CreatePage: FC = () => (
  <>
    <title>Добавить пространство</title>
    <PrivateRoute>
      <LayoutAdmin>
        <EditFeature />
      </LayoutAdmin>
    </PrivateRoute>
  </>
);

export default CreatePage;
