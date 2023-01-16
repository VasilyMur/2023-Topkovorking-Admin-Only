import React, { FC, ChangeEvent, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
  SelectChangeEvent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert
} from '@mui/material';
import Flexbox from '../../components/Flexbox';
import { useActions, useStateSelector } from '../../hooks';
import {
  SPACE_TYPES_OPTIONS_MAPPED,
  CITY_NAMES_OPTIONS_MAPPED,
  CITY_NAMES_MAPPED_TO_COUNTRY
} from '../../constants';
import styles from './DraftFeature.module.scss';

const DraftFeature: FC = () => {
  const state = useStateSelector((s) => s.draft);
  const actions = useActions((a) => a.draft);

  const { space, errors } = state;

  console.log('CREATE DRAFT Component >>>>> ', state);

  useEffect(() => {
    actions.resetPageState();
  }, []);

  const onTextChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let valueCheck = event.target.value;
    if (event.target.name === 'name') {
      valueCheck = event.target.value.slice(0, 39);
    }
    actions.setInputChange(event.target.name, valueCheck);
  };

  const onPhoneChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const NUMERIC_REGEX = /^\d+$/;
    if (value !== '' && !NUMERIC_REGEX.test(value)) {
      return;
    }

    const phoneVal = value.slice(0, 7);
    actions.setPhoneChange(name, phoneVal);
  };

  const onSelectCityChange = (event: SelectChangeEvent<string>) => {
    actions.setInputChange('city', event.target.value);
    actions.setInputChange(
      'country',
      CITY_NAMES_MAPPED_TO_COUNTRY[
        event.target.value as keyof typeof CITY_NAMES_MAPPED_TO_COUNTRY
      ]
    );
  };

  const onSelectTypeChange = (event: SelectChangeEvent<string>) => {
    actions.setInputChange('type', event.target.value);
  };

  const onAddressChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    actions.setAddressChange(event.target.value);
  };

  const onCoordinatesChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const NUMERIC_REGEX = /^(?!\.)-?\d*[.]?\d*$/;
    if (value !== '' && !NUMERIC_REGEX.test(value)) {
      return;
    }

    actions.setCoordinatesChange(name, value);
  };

  return (
    <Flexbox className={styles.container}>
      {state.alert ? (
        <Alert severity="info" sx={{ marginBottom: '12px' }}>
          {state.alert}
        </Alert>
      ) : null}

      <Typography variant="h2" mb="32px">
        Запрос на добавление пространства
      </Typography>

      <Flexbox
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Flexbox flexDirection="column" gap="20px" minHeight="580px">
          <TextField
            label="Название"
            name="name"
            fullWidth
            size="small"
            value={space.name ?? ''}
            error={!!errors?.name}
            onChange={onTextChange}
            disabled={state.isLoading}
          />
          <TextField
            label="Сайт"
            name="url"
            fullWidth
            size="small"
            value={space.url ?? ''}
            error={!!errors?.url}
            onChange={onTextChange}
            disabled={state.isLoading}
          />

          <FormControl fullWidth error={!!errors?.type} size="small">
            <InputLabel>Тип пространства</InputLabel>
            <Select
              value={space.type ?? ''}
              label="Тип пространства"
              name="type"
              onChange={onSelectTypeChange}
              disabled={state.isLoading}
            >
              {Object.keys(SPACE_TYPES_OPTIONS_MAPPED).map((res) => (
                <MenuItem key={res} value={res}>
                  {
                    SPACE_TYPES_OPTIONS_MAPPED[
                      res as keyof typeof SPACE_TYPES_OPTIONS_MAPPED
                    ]
                  }
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="h3">Телефон</Typography>
          <Flexbox gap="20px">
            <TextField
              label="Код города"
              name="code"
              fullWidth
              size="small"
              value={space.phone?.code ?? ''}
              error={!!errors?.phone?.code}
              onChange={onPhoneChange}
              disabled={state.isLoading}
            />
            <TextField
              label="Номер"
              name="number"
              fullWidth
              size="small"
              value={space.phone?.number ?? ''}
              error={!!errors?.phone?.number}
              onChange={onPhoneChange}
              disabled={state.isLoading}
            />
          </Flexbox>

          <Typography variant="h3">Адрес</Typography>
          <TextField
            label="Улица, номер дома (ул. Ленина, 10)"
            name="address"
            fullWidth
            size="small"
            error={!!errors.location?.address}
            value={space.location.address ?? ''}
            onChange={onAddressChange}
            disabled={state.isLoading}
          />

          <FormControl fullWidth error={!!errors.city} size="small">
            <InputLabel>Город</InputLabel>
            <Select
              value={space.city ?? ''}
              label="Город"
              name="city"
              size="small"
              onChange={onSelectCityChange}
              disabled={state.isLoading}
            >
              {Object.keys(CITY_NAMES_OPTIONS_MAPPED).map((res) => (
                <MenuItem key={res} value={res}>
                  {
                    CITY_NAMES_OPTIONS_MAPPED[
                      res as keyof typeof CITY_NAMES_OPTIONS_MAPPED
                    ]
                  }
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="h3">Координаты точки на карте</Typography>

          <Flexbox gap="20px">
            <TextField
              label="Широта (55.7546967)"
              name="lat"
              fullWidth
              size="small"
              error={!!errors.location?.lat}
              value={space.location.lat ?? ''}
              onChange={onCoordinatesChange}
              disabled={state.isLoading}
            />
            <TextField
              label="Долгота (37.6215216)"
              name="lng"
              fullWidth
              size="small"
              error={!!errors.location?.lat}
              value={space.location.lng ?? ''}
              onChange={onCoordinatesChange}
              disabled={state.isLoading}
            />
          </Flexbox>
        </Flexbox>
        <Button variant="contained" onClick={actions.setSaveSpaceData}>
          Отправить
        </Button>
      </Flexbox>
    </Flexbox>
  );
};

export default DraftFeature;
