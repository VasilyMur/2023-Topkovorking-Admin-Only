import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Box, Stepper, Step, StepLabel } from '@mui/material';
import Flexbox from '../../components/Flexbox';
import { useActions, useStateSelector } from '../../hooks';
import { EDIT_FORM_STEPS } from '../../constants';
import HoursChunk from './Chunks/HoursChunk';
import OffersChunk from './Chunks/OffersChunk';
import SpaceInfoChunk from './Chunks/SpaceInfoChunk';
import DescriptionChunk from './Chunks/DescriptionChunk';
import AddressSubwayChunk from './Chunks/AddressSubwayChunk';
import ImageChunk from './Chunks/ImageChunk';
import styles from './EditFeature.module.scss';

const chunkMapping = {
  [EDIT_FORM_STEPS.Info]: <SpaceInfoChunk />,
  [EDIT_FORM_STEPS.Description]: <DescriptionChunk />,
  [EDIT_FORM_STEPS.Address]: <AddressSubwayChunk />,
  [EDIT_FORM_STEPS.Hours]: <HoursChunk />,
  [EDIT_FORM_STEPS.Offers]: <OffersChunk />,
  [EDIT_FORM_STEPS.Images]: <ImageChunk />
};

const steps = [
  'Информация',
  'Адрес',
  'Описание',
  'Расписание',
  'Тарифы',
  'Фото'
];

const EditFeature: FC = () => {
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  console.log('EDIT SPACE Component >>>>> ', state.space);

  const router = useRouter();

  useEffect(() => {
    if (router.query && router.query.id) {
      actions.setStepStart();
      actions.setClearErrors();
      actions.getUserSpace(router.query.id as string);
    } else {
      actions.resetPageState();
    }
  }, []);

  return (
    <Flexbox className={styles.container}>
      <Typography variant="h2" mb="32px">
        {router.query && router.query.id
          ? 'Редактировать данные'
          : 'Создать пространство'}
      </Typography>

      <Flexbox
        maxWidth="600px"
        flexDirection="column"
        minHeight="650px"
        justifyContent="space-between"
        flex="1"
      >
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={state.step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {chunkMapping[state.step]}
        {/* {chunkMapping[5]} */}
      </Flexbox>
    </Flexbox>
  );
};

export default EditFeature;
