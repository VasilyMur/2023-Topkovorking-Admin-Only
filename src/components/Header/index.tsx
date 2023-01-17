import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import Flexbox from '../Flexbox';
import { useActions, useStateSelector } from '../../hooks';
import { URL_PAGE_ADMIN, URL_BASE_WEBSITE } from '../../constants';
import styles from './Header.module.css';

const Header: FC = () => {
  const state = useStateSelector((s) => s.auth);
  const actions = useActions((a) => a.auth);

  const router = useRouter();

  const handleLogout = () => {
    actions.logout();
    router.push(`${URL_BASE_WEBSITE}${URL_PAGE_ADMIN}`);
  };

  return (
    <header className={styles.container}>
      <div>
        <a href="https://topkovorking.ru" className={styles.headerImgLink}>
          <Image src="/crown.png" width={25} height={25} />
          <Typography variant="body1">Topkovorking.ru</Typography>
        </a>
      </div>
      {state.isAuthorized ? (
        <Flexbox>
          <div>
            <a onClick={handleLogout}>
              <Button size="small" variant="outlined">
                Выйти
              </Button>
            </a>
          </div>
        </Flexbox>
      ) : null}
    </header>
  );
};

export default Header;
