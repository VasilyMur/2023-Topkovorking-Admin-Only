import { FC, useEffect, ChangeEvent, useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Typography,
  Button
} from '@mui/material';
import Flexbox from '../../../components/Flexbox';
import { useActions, useStateSelector } from '../../../hooks';
import { CITIES_WITH_SUBWAY } from '../../../constants';
import metro from '../metro';

const AddressSubwayChunk: FC = () => {
  const [lineOptions, setLineOptions] = useState<any[]>([]);
  const [stationOptions, setStationOptions] = useState<any[]>([]);

  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const { errors, space } = state;

  useEffect(() => {
    const currentMetroData = metro.find((res) => res.name === space.city);

    const lOptions = currentMetroData?.lines ?? [];

    setLineOptions(lOptions);
  }, [space.city]);

  useEffect(() => {
    const currentMetroData = metro.find((res) => res.name === space.city);
    const currentStationsData = currentMetroData?.lines?.find(
      (res) => res.name === space.subway.lineName
    );

    const sOptions = currentStationsData?.stations ?? [];
    setStationOptions(sOptions);
  }, [space.city, space.subway.lineName]);

  const onSelectLineChange = (event: SelectChangeEvent<string>) => {
    const details = lineOptions.find((res) => res.name === event.target.value);
    /* eslint-disable camelcase */
    const { name, hex_color } = details;

    /* eslint-disable camelcase */
    actions.setLineChange(name, hex_color);
  };

  const onSelectStationChange = (event: SelectChangeEvent<string>) => {
    const details = stationOptions.find(
      (res) => res.name === event.target.value
    );
    const { id, lat, lng, name } = details;
    actions.setStationChange(id, lat, lng, name);
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
    <>
      <Flexbox flexDirection="column" gap="20px" minHeight="440px">
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
            error={!!errors.location?.lng}
            value={space.location.lng ?? ''}
            onChange={onCoordinatesChange}
            disabled={state.isLoading}
          />
        </Flexbox>
        {CITIES_WITH_SUBWAY.includes(space.city) && lineOptions.length ? (
          <>
            <Typography variant="h3">Метро</Typography>

            <FormControl fullWidth size="small">
              <InputLabel>Линия метро</InputLabel>
              <Select
                value={space.subway.lineName ?? ''}
                label="Линия метро"
                name="line"
                size="small"
                onChange={onSelectLineChange}
                disabled={state.isLoading}
              >
                {lineOptions.map((res) => (
                  <MenuItem key={res.id} value={res.name}>
                    {res.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel>Станция метро</InputLabel>
              <Select
                value={space.subway.name ?? ''}
                label="Линия метро"
                name="station"
                onChange={onSelectStationChange}
                disabled={!state.space.subway.lineName}
              >
                {stationOptions.map((res) => (
                  <MenuItem key={res.id} value={res.name}>
                    {res.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        ) : null}
      </Flexbox>

      <Flexbox flexDirection="column" gap="20px">
        <Flexbox justifyContent="space-between">
          <Button variant="contained" onClick={actions.setActionStepBack}>
            Назад
          </Button>

          <Button variant="contained" onClick={actions.confirmAddressInfo}>
            Вперед
          </Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default AddressSubwayChunk;
