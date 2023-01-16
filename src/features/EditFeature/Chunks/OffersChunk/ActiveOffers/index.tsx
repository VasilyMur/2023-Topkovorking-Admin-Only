import { Typography } from '@mui/material';
import { useStateSelector, useActions } from '../../../../../hooks';
import styles from '../../../EditFeature.module.scss';

const ActiveOffers = () => {
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const onOfferDelete = (uid: number) => {
    actions.setDeleteOffer(uid);
  };
  return (
    <div className={styles.offersActiveContainer}>
      <div className={styles.offersActiveRow}>
        <Typography variant="body2" flex="2">
          <strong>Название</strong>
        </Typography>
        <Typography variant="body2" flex="1">
          <strong>Стоимость</strong>
        </Typography>
        <div style={{ flex: '1', maxWidth: '40px' }}> </div>
      </div>

      {state.space.offers?.map((res) => (
        <div key={res.uid} className={styles.offersActiveRow}>
          <Typography variant="body2" flex="2">
            {res.title}
          </Typography>

          <Typography variant="body2" flex="1">
            {res.price}
            {' '}
            /
            {res.type}
          </Typography>

          <div
            onClick={() => onOfferDelete(res.uid)}
            className={styles.offersActiveRowCloseBtn}
          >
            &times;
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveOffers;
