import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Button, TextField, Alert } from '@mui/material';
import { useActions, useStateSelector } from '../../../../hooks';
import Flexbox from '../../../../components/Flexbox';
import styles from '../../Register.module.scss';
import { URL_PAGE_ADMIN } from '../../../../constants';

const RegisterForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const state = useStateSelector((s) => s.register);
  const actions = useActions((a) => a.register);

  const handleRegister = () => {
    if (email && password) {
      actions.register(email, password);
      setEmail('');
      setPassword('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Flexbox className={styles.form}>
      <TextField
        label="Email"
        fullWidth
        type="search"
        size="small"
        onChange={handleEmailChange}
        value={email}
        disabled={state.isLoading}
        required
      />

      <TextField
        label="Пароль"
        fullWidth
        type="password"
        size="small"
        onChange={handlePasswordChange}
        value={password}
        disabled={state.isLoading}
        required
      />

      <Button
        variant="contained"
        onClick={handleRegister}
        disabled={state.isLoading}
      >
        Отправить
      </Button>
      {state.alert ? <Alert severity="info">{state.alert}</Alert> : null}
      {state.alert ? (
        <Link href={{ pathname: URL_PAGE_ADMIN }}>
          <a>Перейти в кабинет</a>
        </Link>
      ) : null}
    </Flexbox>
  );
};

export default RegisterForm;
