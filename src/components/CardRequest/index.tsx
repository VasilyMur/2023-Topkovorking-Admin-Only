import React, { FC } from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import moment from 'moment';
import { useActions } from '../../hooks';
import { ICustomerRequest } from '../../models/ICustomerRequest';

interface CardRequestProps {
  data: ICustomerRequest;
}

const CardRequest: FC<CardRequestProps> = ({ data }) => {
  const { name, phone, message, spaceName, created } = data;
  const actions = useActions((a) => a.customerRequests);

  const handleDelete = () => {
    actions.deleteCustomerRequest(data._id);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ marginBottom: '15px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Дата запроса: ${moment(created).format('DD-MM-YY HH:mm')}`}
          </Typography>

          <Typography variant="body2">{`Имя: ${name}`}</Typography>
          <Typography variant="body2">{`Телефон: ${phone}`}</Typography>
          <Typography variant="body2">{`Пространство: ${spaceName}`}</Typography>
          <Typography variant="body2">{`Детали: ${message}`}</Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={handleDelete}>
            Удалить
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardRequest;
