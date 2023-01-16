import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateSelector } from '../../../hooks';
import Flexbox from '../../Flexbox';
import styles from '../LayoutAdmin.module.scss';
import {
  URL_PAGE_ADMIN,
  URL_PAGE_CREATE,
  URL_PAGE_REQUESTS,
  URL_PAGE_USERS_LIST,
  URL_PAGE_CREATE_DRAFT
} from '../../../constants';

const LeftMenu: FC = () => {
  const state = useStateSelector((s) => s.auth);
  const { isAuthorized, user } = state;

  const router = useRouter();
  const { pathname } = router;

  return (
    <Flexbox className={styles.styledMenu}>
      <ul>
        {/* Admin menu */}
        {isAuthorized && user.role === 'admin' ? (
          <>
            <li>
              <Link href={{ pathname: URL_PAGE_USERS_LIST }}>
                <a
                  className={`${
                    pathname === URL_PAGE_USERS_LIST ? styles.active : ''
                  }`}
                >
                  Пользователи
                </a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: URL_PAGE_CREATE }}>
                <a
                  className={`${
                    pathname === URL_PAGE_CREATE ? styles.active : ''
                  }`}
                >
                  Создать площадку
                </a>
              </Link>
            </li>
          </>
        ) : null}

        {/* User menu */}
        {isAuthorized ? (
          <>
            <li>
              <Link href={{ pathname: URL_PAGE_ADMIN }}>
                <a
                  className={`${
                    pathname === URL_PAGE_ADMIN ? styles.active : ''
                  }`}
                >
                  Пространства
                </a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: URL_PAGE_CREATE_DRAFT }}>
                <a
                  aria-disabled={!(user.isActivated && user.canCreate)}
                  className={`${
                    pathname === URL_PAGE_CREATE_DRAFT ? styles.active : ''
                  }`}
                >
                  Добавить
                </a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: URL_PAGE_REQUESTS }}>
                <a
                  aria-disabled={!user.isActivated}
                  className={`${
                    pathname === URL_PAGE_REQUESTS ? styles.active : ''
                  }`}
                >
                  Запросы
                </a>
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </Flexbox>
  );
};

export default LeftMenu;
