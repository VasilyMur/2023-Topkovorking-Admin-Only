import React, { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './Footer.module.css';
import Flexbox from '../Flexbox';

const Footer: FC = () => (
  <footer className={styles.container}>
    <Flexbox className={styles.wrap}>
      <a href="https://topkovorking.ru">
        <Typography variant="body2">Topkovorking.ru</Typography>
      </a>

      <Typography variant="body2">
        Сервис поиска и бронирования офисных пространств
      </Typography>
      <Typography variant="body2">
        {`@ ${new Date().getFullYear()}. Все права защищены.`}
      </Typography>
    </Flexbox>
  </footer>
);

export default Footer;
