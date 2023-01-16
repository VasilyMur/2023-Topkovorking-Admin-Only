import { useState } from 'react';
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Typography,
  TextField,
  Button
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers';
import { Remove } from '@mui/icons-material';
import { useActions, useStateSelector } from '../../../../hooks';
import { WEEKDAYS_MAPPED } from '../../../../constants';
import Flexbox from '../../../../components/Flexbox';
import HoursCurrent from './HoursCurrent';
import styles from '../../EditFeature.module.scss';

const HoursChunk = () => {
  const [daySelected, setDaySelected] = useState(
    Object.keys(WEEKDAYS_MAPPED)[0]
  );
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const onSelectDayChange = (event: SelectChangeEvent<string>) => {
    setDaySelected(event.target.value);
  };

  const handleOpenChange = (value: Date | null) => {
    if (value) {
      const open = new Date(value);

      if (open.getTime()) {
        actions.setHoursOpenChange(daySelected, open.getTime());
      }
    }
  };

  const handleCloseChange = (value: Date | null) => {
    if (value) {
      const close = new Date(value);

      if (close.getTime()) {
        actions.setHoursCloseChange(daySelected, close.getTime());
      }
    }
  };

  return (
    <>
      <Flexbox flexDirection="column" gap="20px" minHeight="440px">
        <Typography variant="h3">Время работы</Typography>

        <HoursCurrent />

        <FormControl fullWidth size="small">
          <InputLabel>Время работы</InputLabel>
          <Select
            value={daySelected}
            onChange={onSelectDayChange}
            disabled={state.isLoading}
          >
            {Object.keys(WEEKDAYS_MAPPED).map((res) => (
              <MenuItem key={res} value={res}>
                {WEEKDAYS_MAPPED[res as keyof typeof WEEKDAYS_MAPPED]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className={styles.hoursDaySelector}>
          <TimePicker
            label="Открытие"
            value={
              state.space.schedule[
                daySelected as keyof typeof state.space.schedule
              ].open
            }
            ampm={false}
            onChange={handleOpenChange}
            renderInput={(params) => <TextField size="small" {...params} />}
          />

          <div>
            <Remove />
          </div>

          <TimePicker
            label="Закрытие"
            value={
              state.space.schedule[
                daySelected as keyof typeof state.space.schedule
              ].close
            }
            ampm={false}
            onChange={handleCloseChange}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </div>
      </Flexbox>

      <Flexbox flexDirection="column" gap="20px">
        <Flexbox justifyContent="space-between">
          <Button variant="contained" onClick={actions.setActionStepBack}>
            Назад
          </Button>

          <Button variant="contained" onClick={actions.confirmHoursInfo}>
            Вперед
          </Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default HoursChunk;
