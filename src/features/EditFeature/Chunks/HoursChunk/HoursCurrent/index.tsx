import moment from 'moment';
import { Typography } from '@mui/material';
import { useStateSelector } from '../../../../../hooks';
import { WEEKDAYS_MAPPED } from '../../../../../constants';
import styles from '../../../EditFeature.module.scss';

const HoursCurrent = () => {
  const state = useStateSelector((s) => s.edit);

  return (
    <div className={styles.hoursDaysContainer}>
      <div className={styles.hoursDaysRow}>
        <Typography variant="body1">День</Typography>
        <Typography variant="body1">Открытие</Typography>
        <Typography variant="body1">Закрытие</Typography>
      </div>

      {Object.keys(state.space.schedule).map((res) => {
        const timeOpen = moment(
          state.space.schedule[res as keyof typeof state.space.schedule].open
        ).format('HH:mm');

        const timeClose = moment(
          state.space.schedule[res as keyof typeof state.space.schedule].close
        ).format('HH:mm');

        return (
          <div key={res} className={styles.hoursDaysRow}>
            <Typography variant="body2">
              {WEEKDAYS_MAPPED[res as keyof typeof WEEKDAYS_MAPPED]}
            </Typography>

            <Typography variant="body2">{timeOpen}</Typography>

            <Typography variant="body2">{timeClose}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default HoursCurrent;
