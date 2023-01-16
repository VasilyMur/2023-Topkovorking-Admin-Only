import { FC } from 'react';
import RequestsFeature from '../features/RequestsFeature';
import PrivateRoute from '../components/PrivateRoute';
import LayoutAdmin from '../components/LayoutAdmin';

const RequestsPage: FC = () => (
  <>
    <title>Запросы клиентов</title>
    <PrivateRoute>
      <LayoutAdmin>
        <RequestsFeature />
      </LayoutAdmin>
    </PrivateRoute>
  </>
);

export default RequestsPage;
