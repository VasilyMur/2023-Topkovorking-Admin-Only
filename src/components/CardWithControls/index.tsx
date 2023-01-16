import React, { FC, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  TextField
} from '@mui/material';
import { Edit, Delete, Publish, PersonAdd, Email } from '@mui/icons-material';
import { useActions, useStateSelector } from '../../hooks';
import { COMPANY_PUBLISH_STATUS_PENDING } from '../../constants';
import styles from './CardWithControls.module.scss';

interface CardWithControlsProps {
  children: JSX.Element;
  spaceId: string;
  publishStatus: string;
  slug: string;
  adminDetails: null | { _id: string; email: string };
}

const CardWithControls: FC<CardWithControlsProps> = ({
  children,
  spaceId,
  publishStatus,
  slug,
  adminDetails
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [open, setOpen] = useState(false);

  const state = useStateSelector((s) => s.auth);
  const actions = useActions((a) => a.admin);

  const handlePublishToggleSpace = () => {
    actions.toggleSpacePublishStatus(slug);
  };

  const onUserEmailChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUserEmail(event.target.value);
  };

  const handleDeleteSpace = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onYes = () => {
    console.log('yes');
    actions.setDeleteSpaceData(spaceId);
    setOpen(false);
  };
  const onCancel = () => {
    console.log('no');
    setOpen(false);
  };

  const handleEmailChangeSubmit = () => {
    if (userEmail) {
      actions.assignSpaceAdminEmail(slug, userEmail);
      setUserEmail('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>{children}</div>
      <div className={styles.controlsMenu}>
        {publishStatus !== COMPANY_PUBLISH_STATUS_PENDING ? (
          <Typography
            variant="body2"
            sx={{ background: '#4caf50', padding: '10px 20px', color: '#fff' }}
          >
            Пространство опубликовано
          </Typography>
        ) : (
          <Typography
            variant="body2"
            sx={{ background: '#ff9800', padding: '10px 20px' }}
          >
            Пространство не опубликовано - заполните все данные и обратитесь к
            администратору
          </Typography>
        )}

        <Link href={{ pathname: `/edit`, query: { id: spaceId } }}>
          <a>
            <Edit />
            <Typography variant="body1">Редактировать</Typography>
          </a>
        </Link>

        {state.user.role === 'admin' ? (
          <>
            <a onClick={handleDeleteSpace}>
              <Delete />
              <Typography variant="body1"> Удалить</Typography>
            </a>
            <a onClick={handlePublishToggleSpace}>
              <Publish />
              <Typography variant="body1">
                {publishStatus !== COMPANY_PUBLISH_STATUS_PENDING
                  ? 'Снять с публикации'
                  : 'Опубликовать'}
              </Typography>
            </a>
            <div className={styles.actionGroup}>
              <Email />
              <div className={styles.actionGroupWrap}>
                <TextField
                  sx={{ flex: '2' }}
                  label="Email"
                  name="email"
                  value={userEmail ?? ''}
                  onChange={onUserEmailChange}
                  fullWidth
                  size="small"
                />
                <Button
                  variant="contained"
                  sx={{ flex: '1' }}
                  onClick={handleEmailChangeSubmit}
                  fullWidth
                >
                  Подтвердить
                </Button>
              </div>
            </div>

            <div className={styles.actionGroup}>
              {adminDetails && Object.keys(adminDetails).length ? (
                <>
                  <PersonAdd />
                  {adminDetails?.email}
                </>
              ) : (
                <PersonAdd />
              )}
            </div>

            <Dialog open={open} onClose={onClose}>
              <DialogTitle>Удалить пространство?</DialogTitle>

              <DialogActions>
                <Button variant="contained" onClick={onYes}>
                  Да
                </Button>
                <Button variant="contained" onClick={onCancel}>
                  Нет
                </Button>
              </DialogActions>
            </Dialog>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CardWithControls;
