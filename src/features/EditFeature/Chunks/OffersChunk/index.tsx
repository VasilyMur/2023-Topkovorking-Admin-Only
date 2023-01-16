import { FC, useState, ChangeEvent } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Button,
  SelectChangeEvent
} from '@mui/material';
import Flexbox from '../../../../components/Flexbox';
import { useActions, useStateSelector } from '../../../../hooks';
import { SPACE_OFFER_TYPES_MAPPED } from '../../../../constants';
import ActiveOffers from './ActiveOffers';
import styles from '../../EditFeature.module.scss';

const Offers: FC = () => {
  const [title, setOfferTitle] = useState('');
  const [price, setOfferPrice] = useState('');
  const [priceType, setOfferPriceType] = useState('');

  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const onOfferSubmit = () => {
    const offersNumberLimit = state.space.offers.length < 3;
    if (title && price && priceType && offersNumberLimit) {
      actions.setOffer({
        title,
        price,
        type: SPACE_OFFER_TYPES_MAPPED[
          priceType as keyof typeof SPACE_OFFER_TYPES_MAPPED
        ],
        uid: Date.now()
      });

      setOfferTitle('');
      setOfferPrice('');
      setOfferPriceType('');
    }
  };

  const onTitleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const chars = event.target.value.slice(0, 42);
    setOfferTitle(chars);
  };

  const onPriceChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value) {
      const numbersOnlyRegex = /^[0-9]+$/;
      if (event.target.value.match(numbersOnlyRegex)) {
        setOfferPrice(event.target.value);
      }
    } else {
      setOfferPrice(event.target.value);
    }
  };

  const onSelectTypeChange = (event: SelectChangeEvent<string>) => {
    setOfferPriceType(event.target.value);
  };

  return (
    <>
      <Flexbox flexDirection="column" gap="20px" minHeight="440px">
        <Typography variant="h3">Действующие тарифы</Typography>
        <ActiveOffers />
        <Flexbox className={styles.offersContainer}>
          <Typography variant="h3">Добавить тариф</Typography>

          <TextField
            className={styles.top}
            label="Название"
            name="offerName"
            onChange={onTitleChange}
            fullWidth
            size="small"
            value={title}
            disabled={state.isLoading}
          />
          <div className={styles.offersPriceWrap}>
            <TextField
              className={styles.top}
              label="Стоимость"
              name="offerPrice"
              onChange={onPriceChange}
              fullWidth
              size="small"
              value={price}
              disabled={state.isLoading}
            />
            ₽
            <FormControl fullWidth size="small">
              <InputLabel>Тип стоимости</InputLabel>
              <Select
                value={priceType}
                size="small"
                label="Тип стоимости"
                name="type"
                onChange={onSelectTypeChange}
                disabled={state.isLoading}
              >
                {Object.keys(SPACE_OFFER_TYPES_MAPPED).map((res) => (
                  <MenuItem key={res} value={res}>
                    {
                      SPACE_OFFER_TYPES_MAPPED[
                        res as keyof typeof SPACE_OFFER_TYPES_MAPPED
                      ]
                    }
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button
            variant="contained"
            onClick={onOfferSubmit}
            sx={{ alignSelf: 'end', marginTop: '20px' }}
          >
            Добавить
          </Button>
        </Flexbox>
      </Flexbox>

      <Flexbox flexDirection="column" gap="20px">
        <Flexbox justifyContent="space-between">
          <Button variant="contained" onClick={actions.setActionStepBack}>
            Назад
          </Button>

          <Button variant="contained" onClick={actions.confirmOffersInfo}>
            Вперед
          </Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default Offers;
