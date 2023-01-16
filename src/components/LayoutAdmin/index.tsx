import React, { FC } from 'react';
import Flexbox from '../Flexbox';
import LeftMenu from './LeftMenu';
import styles from './LayoutAdmin.module.scss';

interface LayoutAdminProps {
  children?: JSX.Element | JSX.Element[];
}

const LayoutAdmin: FC<LayoutAdminProps> = ({ children }) => (
  <Flexbox flexDirection="column" flex="1">
    <Flexbox className={styles.layoutAdminWrap}>
      <LeftMenu />
      <Flexbox className={styles.workspace}>{children}</Flexbox>
    </Flexbox>
  </Flexbox>
);

export default LayoutAdmin;
