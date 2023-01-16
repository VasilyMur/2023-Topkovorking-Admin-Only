import React, { FC } from 'react';
import { Typography } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import Flexbox from '../../components/Flexbox';
import styles from './Register.module.scss';

const RegisterFeature: FC = () => (
  <Flexbox className={styles.container}>
    <Flexbox className={styles.wrap}>
      <Typography variant="h3" mb="24px">
        Зарегистрируйтесь
      </Typography>

      <RegisterForm />
    </Flexbox>
  </Flexbox>
);

export default RegisterFeature;
