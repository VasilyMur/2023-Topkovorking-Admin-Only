import { FC, ChangeEvent } from 'react';
import {
  Button,
  TextField,
  SelectChangeEvent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography
} from '@mui/material';
import {
  CITY_NAMES_OPTIONS_MAPPED,
  CITY_NAMES_MAPPED_TO_COUNTRY,
  SPACE_TYPES_OPTIONS_MAPPED
} from '../../../constants';
import Flexbox from '../../../components/Flexbox';
import { useActions, useStateSelector } from '../../../hooks';

const SpaceInfoChunk: FC = () => {
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const { errors, space } = state;

  const onTextChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let valueCheck = event.target.value;
    if (event.target.name === 'name') {
      valueCheck = event.target.value.slice(0, 39);
    }
    actions.setInputChange(event.target.name, valueCheck);
  };

  const onPriceDayChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    const NUMERIC_REGEX = /^\d+$/;
    if (value !== '' && !NUMERIC_REGEX.test(value)) {
      return;
    }
    actions.setInputChange(event.target.name, event.target.value);
  };

  const onPhoneChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    const NUMERIC_REGEX = /^\d+$/;
    if (value !== '' && !NUMERIC_REGEX.test(value)) {
      return;
    }
    actions.setPhoneChange(event.target.name, event.target.value);
  };

  const onSelectCityChange = (event: SelectChangeEvent<string>) => {
    actions.setInputChange('city', event.target.value);
    actions.setInputChange(
      'country',
      CITY_NAMES_MAPPED_TO_COUNTRY[
        event.target.value as keyof typeof CITY_NAMES_MAPPED_TO_COUNTRY
      ]
    );
    actions.setLineChange('', '');
    actions.setStationChange('', null, null, '');
  };

  const onSelectTypeChange = (event: SelectChangeEvent<string>) => {
    actions.setInputChange('type', event.target.value);
  };

  return (
    <>
      <Flexbox flexDirection="column" gap="20px" minHeight="440px">
        <Typography variant="h3">Общая информация</Typography>
        <TextField
          label="Название"
          name="name"
          fullWidth
          size="small"
          error={!!errors?.name}
          // helperText={errors?.name}
          value={space.name ?? ''}
          onChange={onTextChange}
          disabled={state.isLoading}
        />
        <TextField
          label="Сайт"
          name="url"
          fullWidth
          size="small"
          error={!!errors?.url}
          // helperText={errors?.url}
          value={space.url ?? ''}
          onChange={onTextChange}
          disabled={state.isLoading}
        />
        <FormControl error={!!errors?.city} fullWidth size="small">
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

        <TextField
          label="Стоимость посещения / день"
          name="priceDay"
          fullWidth
          size="small"
          value={space.priceDay ?? ''}
          onChange={onPriceDayChange}
          disabled={state.isLoading}
        />

        <FormControl error={!!errors?.type} fullWidth size="small">
          <InputLabel>Тип пространства</InputLabel>
          <Select
            value={space.type ?? ''}
            label="Тип пространства"
            name="type"
            size="small"
            error={!!errors?.type}
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
            error={!!errors?.phone?.code}
            // helperText={errors?.phone?.code}
            value={space.phone?.code ?? ''}
            onChange={onPhoneChange}
            disabled={state.isLoading}
          />
          <TextField
            label="Номер телефона"
            name="number"
            fullWidth
            size="small"
            error={!!errors?.phone?.number}
            // helperText={errors?.phone?.number}
            value={space.phone?.number ?? ''}
            onChange={onPhoneChange}
            disabled={state.isLoading}
          />
        </Flexbox>

        {/* <TextField
          label="Страна"
          name="country"
          fullWidth
          size="medium"
          value={
            COUNTRY_NAMES_OPTIONS_MAPPED[
              space.country as keyof typeof COUNTRY_NAMES_OPTIONS_MAPPED
            ] ?? ''
          }
          disabled
        /> */}
      </Flexbox>

      <Flexbox flexDirection="column" gap="20px">
        <Flexbox justifyContent="space-between">
          <Button variant="contained" disabled>
            Назад
          </Button>

          <Button variant="contained" onClick={actions.confirmSpaceInfo}>
            Вперед
          </Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default SpaceInfoChunk;
