import { FC } from 'react';
import { Typography } from '@mui/material';
import { Info, Telegram } from '@mui/icons-material';
import Flexbox from '../../components/Flexbox';
import { useStateSelector } from '../../hooks';
import styles from './AdminFeature.module.scss';
import AdminContent from './components/AdminContent';
import SpaceFilters from './components/SpaceFilters';

const AdminFeature: FC = () => {
  const state = useStateSelector((s) => s.auth);

  const { user } = state;

  return (
    <Flexbox className={styles.container}>
      <Flexbox className={styles.messageBox}>
        <Typography variant="h2" mb="16px">
          Панель администратора
        </Typography>
        <Typography variant="body2" mb="16px">
          {`Email: ${user.email}`}
        </Typography>
        <Typography variant="body2" mb="16px">
          {`Статус: ${
            user.isActivated ? 'Подтвержден' : 'Требуется подтверждение'
          }`}
        </Typography>
        <div className={styles.messageBoxItem}>
          <Typography variant="body2" mb="16px">
            Администратор topkovorking.ru:
          </Typography>
          <div className={styles.messageBoxItemRight}>
            <Telegram />
            <Typography variant="body2" mb="16px">
              @topkovorking
            </Typography>
          </div>
        </div>

        {!user.isActivated ? (
          <p className={styles.message}>
            <Info />
            {' '}
            Для активации эккаунта - пройдите по ссылке в вашем email!
          </p>
        ) : null}
      </Flexbox>

      {user.role === 'admin' ? <SpaceFilters /> : null}
      <AdminContent />
    </Flexbox>
  );
};

export default AdminFeature;
