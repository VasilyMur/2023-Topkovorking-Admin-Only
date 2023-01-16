import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, SwipeableDrawer, Typography } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import Link from 'next/link';
import Flexbox from '../Flexbox';
import { useActions, useStateSelector } from '../../hooks';
import {
  URL_PAGE_ADMIN,
  URL_BASE_WEBSITE,
  CITY_NAME_EKB,
  CITY_NAME_SPB,
  CITY_NAME_KAZAN
} from '../../constants';
import styles from './Header.module.css';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const state = useStateSelector((s) => s.auth);
  const actions = useActions((a) => a.auth);

  const router = useRouter();
  const { asPath } = router;

  const handleLogout = () => {
    actions.logout();
    router.push(`${URL_BASE_WEBSITE}${URL_PAGE_ADMIN}`);
  };

  const menuToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      setOpen(!open);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return (
    <header className={styles.container}>
      <div>
        <Link href={{ pathname: '/' }}>
          <a className={styles.headerImgLink}>
            <Image src="/crown.png" width={25} height={25} />
            <Typography variant="body1">Topkovorking.ru</Typography>
          </a>
        </Link>
      </div>
      {
        state.isAuthorized ? (
          <Flexbox>
            <div>
              <a onClick={handleLogout}>
                <Button size="small" variant="outlined">
                  Выйти
                </Button>
              </a>
            </div>
          </Flexbox>
        ) : null
        // (
        //   <Flexbox className={styles.mobileMenuContentFooter}>
        //     <div>
        //       <Link href={{ pathname: '/' }}>
        //         <a>
        //           <Button size="small" variant="outlined">
        //             Войти
        //           </Button>
        //         </a>
        //       </Link>
        //     </div>
        //   </Flexbox>
        // )
      }
    </header>
  );
};

export default Header;
