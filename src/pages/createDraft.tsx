import { FC } from 'react';
import DraftFeature from '../features/DraftFeature';
import PrivateRoute from '../components/PrivateRoute';
import LayoutAdmin from '../components/LayoutAdmin';

const CreateDraftPage: FC = () => (
  <>
    <title>Добавить пространство</title>
    <PrivateRoute>
      <LayoutAdmin>
        <DraftFeature />
      </LayoutAdmin>
    </PrivateRoute>
  </>
);

export default CreateDraftPage;
