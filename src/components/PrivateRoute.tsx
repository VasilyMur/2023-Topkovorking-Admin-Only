import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useActions, useStateSelector } from '../hooks';
import LoginFeature from '../features/LoginFeature';
import { URL_BASE_WEBSITE } from '../constants';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const state = useStateSelector((s) => s.auth);
  const actions = useActions((a) => a.auth);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      actions.checkAuth();
    } else {
      router.push(`${URL_BASE_WEBSITE}/`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.isAuthorized) {
    return children;
  }
  return <LoginFeature />;
};

export default PrivateRoute;
