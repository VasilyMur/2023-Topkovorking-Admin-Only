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
      <nav>
        <ul>
          <li>
            <a onClick={menuToggle}>
              <Menu />
            </a>
          </li>
        </ul>
      </nav>
      <SwipeableDrawer
        className={styles.mobileMenu}
        anchor="right"
        open={open}
        // open
        onOpen={menuToggle}
        onClose={menuToggle}
        PaperProps={{
          sx: {
            width: '360px',
            height: 'calc(-24px + 100vh)',
            marginTop: '12px',
            borderRadius: '12px 0 0 12px'
          }
        }}
      >
        <Flexbox
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Flexbox flexDirection="column">
            <Flexbox className={styles.mobileMenuHeader}>
              <Link href={{ pathname: '/' }}>
                <a className={styles.headerImgLink}>
                  <Image src="/crown.png" width={25} height={25} />
                  <Typography variant="body1">Topkovorking.ru</Typography>
                </a>
              </Link>
              <Close onClick={menuToggle} />
            </Flexbox>

            <Flexbox className={styles.mobileMenuContent}>
              <Flexbox className={styles.mobileMenuContentCities}>
                <Link href={{ pathname: '/' }}>
                  <a>
                    <Typography variant="body2">Москва</Typography>
                  </a>
                </Link>
                <Link
                  as={`/city/${CITY_NAME_SPB}`}
                  href={{
                    pathname: `/city`,
                    query: { city: CITY_NAME_SPB }
                  }}
                >
                  <a>
                    <Typography variant="body2">Санкт-Петербург</Typography>
                  </a>
                </Link>

                <Link
                  as={`/city/${CITY_NAME_EKB}`}
                  href={{
                    pathname: `/city`,
                    query: { city: CITY_NAME_EKB }
                  }}
                >
                  <a>
                    <Typography variant="body2">Екатеринбург</Typography>
                  </a>
                </Link>

                <Link
                  as={`/city/${CITY_NAME_KAZAN}`}
                  href={{
                    pathname: `/city`,
                    query: { city: CITY_NAME_KAZAN }
                  }}
                >
                  <a>
                    <Typography variant="body2">Казань</Typography>
                  </a>
                </Link>
              </Flexbox>
            </Flexbox>
          </Flexbox>
          {state.isAuthorized ? (
            <Flexbox className={styles.mobileMenuContentFooter}>
              <div>
                <Link href={{ pathname: '/admin' }}>
                  <a>
                    <Button size="small" variant="contained">
                      Кабинет
                    </Button>
                  </a>
                </Link>
              </div>

              <div>
                <a onClick={handleLogout}>
                  <Button size="small" variant="outlined">
                    Выйти
                  </Button>
                </a>
              </div>
            </Flexbox>
          ) : (
            <Flexbox className={styles.mobileMenuContentFooter}>
              <div>
                <Link href={{ pathname: '/admin' }}>
                  <a>
                    <Button size="small" variant="outlined">
                      Войти
                    </Button>
                  </a>
                </Link>
              </div>
            </Flexbox>
          )}
        </Flexbox>
      </SwipeableDrawer>
    </header>
  );
};

export default Header;
