import React, { FC, useState } from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  DialogActions,
  Dialog,
  DialogTitle
} from '@mui/material';
import { useActions } from '../../hooks';
import { IUser } from '../../models/IUser';

interface CardUserProps {
  data: IUser;
}

const CardUser: FC<CardUserProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { email, isActivated, canCreate } = data;
  const actions = useActions((a) => a.users);

  const handleDelete = () => {
    setOpen(true);
  };

  const handleSetActive = () => {
    actions.activateUser(data._id);
  };

  const handleCanUpdate = () => {
    actions.toggleCanCreate(data._id);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onYes = () => {
    console.log('yes');
    actions.removeUser(data._id);
    setOpen(false);
  };
  const onCancel = () => {
    console.log('no');
    setOpen(false);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ marginBottom: '15px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {email}
          </Typography>

          <Typography variant="body2">{`Еmail подтвержден: ${isActivated}`}</Typography>
          <Typography variant="body2">{`Создание запроса: ${canCreate}`}</Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            disabled={data.role === 'admin'}
            onClick={handleDelete}
          >
            Удалить
          </Button>
          <Button size="small" onClick={handleSetActive}>
            Активировать
          </Button>
          <Button size="small" onClick={handleCanUpdate}>
            Активировать создание
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Удалить пользователя?</DialogTitle>

        <DialogActions>
          <Button variant="contained" onClick={onYes}>
            Да
          </Button>
          <Button variant="contained" onClick={onCancel}>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CardUser;
