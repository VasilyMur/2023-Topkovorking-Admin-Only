import React, { FC, useState, useEffect } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import { useActions, useStateSelector } from '../../../../hooks';
import Flexbox from '../../../../components/Flexbox';
import styles from '../../LoginFeature.module.scss';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const state = useStateSelector((s) => s.auth);
  const actions = useActions((a) => a.auth);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    actions.login(email, password);
  };
  // const handleGetUsers = () => {
  //   actions.fetchUsers();
  // };

  useEffect(() => {
    actions.setClearAlert();
  }, []);

  return (
    <Flexbox className={styles.form}>
      <TextField
        label="Email"
        fullWidth
        type="search"
        size="small"
        onChange={handleEmailChange}
        value={email}
      />

      <TextField
        label="Пароль"
        fullWidth
        type="password"
        size="small"
        onChange={handlePasswordChange}
        value={password}
      />

      <Button variant="contained" onClick={handleLogin}>
        Войти
      </Button>

      {/* <Button variant="contained" onClick={handleGetUsers}>
        Все пользователи
      </Button> */}
      {state.alert ? <Alert severity="info">{state.alert}</Alert> : null}
    </Flexbox>
  );
};

export default LoginForm;
