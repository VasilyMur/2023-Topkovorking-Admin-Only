import React, { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import LoginForm from './components/LoginForm';
import Flexbox from '../../components/Flexbox';
import styles from './LoginFeature.module.css';

const LoginFeature: FC = () => (
  <Flexbox className={styles.container}>
    <Flexbox className={styles.wrap}>
      <Typography variant="h3" mb="24px">
        Введите логин и пароль
      </Typography>

      <LoginForm />

      <Link href={{ pathname: '/register' }}>
        <a>
          <Typography variant="body1" className={styles.register}>
            Зарегистрируйтесь
          </Typography>
        </a>
      </Link>
    </Flexbox>
  </Flexbox>
);
// background-image: url('https://res.cloudinary.com/dlmeqtsfq/image/upload/v1657437880/2022/offize/offize_back_pattern.png');
export default LoginFeature;
