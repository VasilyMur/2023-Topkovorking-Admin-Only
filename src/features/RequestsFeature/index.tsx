import { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import Flexbox from '../../components/Flexbox';
import CardRequest from '../../components/CardRequest';
import { useActions, useStateSelector } from '../../hooks';
import styles from './RequestsFeature.module.scss';

const RequestsFeature: FC = () => {
  const state = useStateSelector((s) => s.customerRequests);
  const actions = useActions((a) => a.customerRequests);

  console.log('Requests Component >>>>> ', state);

  useEffect(() => {
    actions.setUserSpaceRequets();
  }, []);

  return (
    <Flexbox className={styles.container}>
      <Typography variant="h2" mb="24px">
        Запросы клиентов
      </Typography>

      <Flexbox maxWidth="600px" flexDirection="column" flex="1">
        {state.userRequests.length
          ? state.userRequests.map((r) => <CardRequest key={r._id} data={r} />)
          : 'К вам пока не поступали запросы от клиентов.'}
      </Flexbox>
    </Flexbox>
  );
};

export default RequestsFeature;
