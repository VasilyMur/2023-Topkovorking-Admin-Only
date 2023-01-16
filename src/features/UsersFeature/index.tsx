import { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import Flexbox from '../../components/Flexbox';
import CardUser from '../../components/CardUser';
import { useActions, useStateSelector } from '../../hooks';
import styles from './UsersFeature.module.scss';

const RequestsFeature: FC = () => {
  const state = useStateSelector((s) => s.users);
  const actions = useActions((a) => a.users);

  console.log('UsersList Component >>>>> ', state);

  useEffect(() => {
    actions.getUsersList();
  }, []);

  return (
    <Flexbox className={styles.container}>
      <Typography variant="h2" mb="24px">
        Пользователи
      </Typography>

      <Flexbox maxWidth="600px" flexDirection="column" flex="1">
        {state.usersList.length
          ? state.usersList.map((r) => <CardUser key={r._id} data={r} />)
          : null}
      </Flexbox>
    </Flexbox>
  );
};

export default RequestsFeature;
