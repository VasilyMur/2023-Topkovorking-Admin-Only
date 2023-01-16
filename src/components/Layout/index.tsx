import React, { FC } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Flexbox from '../Flexbox';
import styles from './Layout.module.css';

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Flexbox className={styles.layoutWrap}>
    <Header />
    <Flexbox className={styles.container}>{children}</Flexbox>
    <Footer />
  </Flexbox>
);

export default Layout;
