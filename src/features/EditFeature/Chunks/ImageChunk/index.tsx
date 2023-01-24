import React, { useState, useEffect } from 'react';
import { Button, Typography, CircularProgress, Alert } from '@mui/material';
import Flexbox from '../../../../components/Flexbox';
import styles from '../../EditFeature.module.scss';
import { useActions, useStateSelector } from '../../../../hooks';
import UploadImage from './UploadImage';

const ImageChunk = () => {
  const [error, setError] = useState('');
  const [displayLoaderOne, setDisplayLoaderOne] = useState(false);
  const [displayLoaderTwo, setDisplayLoaderTwo] = useState(false);

  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const { space } = state;
  const { imgTitle, imgMain } = space;

  useEffect(() => {
    if (!state.uploadUrl) {
      actions.getUploadImageUrl();
    }
  }, []);

  const onSpaceDataSave = () => {
    actions.setSaveSpaceData();
  };

  return (
    <>
      <Flexbox flexDirection="column" minHeight="440px">
        <Flexbox gap="40px" marginTop="24px">
          {/* Large image */}
          <Flexbox
            flexDirection="column"
            sx={{ maxHeight: '340px', minWidth: '310px' }}
          >
            <Typography variant="h4">Основное фото</Typography>
            <Typography variant="body2" mb="12px">
              (570px x 380px)
            </Typography>

            <Flexbox alignItems="center" marginBottom="4px">
              <UploadImage
                maxHeight={380}
                maxWidth={570}
                setError={setError}
                setDisplayLoader={setDisplayLoaderOne}
                loader={displayLoaderOne}
                loaderCheck={displayLoaderTwo}
              />

              {displayLoaderOne ? <CircularProgress size={20} /> : null}
            </Flexbox>

            {imgMain.url ? (
              <div className={styles.formImageLarge}>
                <img src={imgMain.url} alt="Upload Preview" />
              </div>
            ) : (
              <Typography sx={{ color: 'red' }} variant="body2" mb="16px">
                Загрузите основное фото
              </Typography>
            )}
          </Flexbox>

          {/* Small image */}
          <Flexbox
            flexDirection="column"
            sx={{ maxHeight: '340px', minWidth: '310px' }}
          >
            <Typography variant="h4">Титульное фото</Typography>
            <Typography variant="body2" mb="12px">
              (160px x 160px)
            </Typography>

            <Flexbox alignItems="center" marginBottom="4px">
              <UploadImage
                maxHeight={160}
                maxWidth={160}
                setError={setError}
                setDisplayLoader={setDisplayLoaderTwo}
                loader={displayLoaderTwo}
                loaderCheck={displayLoaderOne}
              />
              {displayLoaderTwo ? <CircularProgress size={20} /> : null}
            </Flexbox>

            {imgTitle.url ? (
              <div className={styles.formImageSmall}>
                <img src={imgTitle.url} alt="Upload Preview" />
              </div>
            ) : (
              <Typography sx={{ color: 'red' }} variant="body2" mb="16px">
                Загрузите титульное фото
              </Typography>
            )}
          </Flexbox>
        </Flexbox>

        {/* Error message */}
        {error ? (
          <Typography
            variant="body2"
            sx={{ color: 'red', marginTop: '16px', textAlign: 'center' }}
          >
            {error}
          </Typography>
        ) : null}
        {state.alert ? <Alert severity="info">{state.alert}</Alert> : null}
      </Flexbox>

      <Flexbox flexDirection="column" gap="20px">
        <Flexbox justifyContent="space-between">
          <Button variant="contained" onClick={actions.setActionStepBack}>
            Назад
          </Button>

          <Button variant="contained" disabled>
            Вперед
          </Button>
        </Flexbox>

        <Flexbox
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '250px'
          }}
        >
          <Button
            onClick={onSpaceDataSave}
            sx={{ maxWidth: '200px' }}
            variant="contained"
            disabled={displayLoaderOne || displayLoaderTwo || state.isLoading}
          >
            Сохранить все данные
          </Button>
          {state.isLoading ? <CircularProgress size={20} /> : null}
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default ImageChunk;
