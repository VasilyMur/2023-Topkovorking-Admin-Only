import React, { FC, useEffect, ChangeEvent, useState } from 'react';
import {
  TextField,
  FormControlLabel,
  Typography,
  Checkbox,
  Button
} from '@mui/material';
import { useActions, useStateSelector } from '../../../../hooks';
import Flexbox from '../../../../components/Flexbox';
import styles from '../../AdminFeature.module.scss';

const SpaceFilters: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [pendingOnly, setPendingOnly] = useState(false);

  const state = useStateSelector((s) => s.admin);
  const actions = useActions((a) => a.admin);

  const onSearchTextChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const onSearchEmailChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchEmail(event.target.value);
  };

  const togglePendingOnly = () => {
    setPendingOnly(!pendingOnly);
  };

  const applySearchFilter = () => {
    actions.filterUserSpaces(null, searchText);
  };

  const applyEmailSearchFilter = () => {
    actions.filterUserSpacesEmail(searchEmail);
  };

  const applyCheckFilter = () => {
    actions.filterUserSpaces(pendingOnly, null);
  };

  const clearAllFilters = () => {
    setSearchText('');
    setSearchEmail('');
    setPendingOnly(false);
    actions.filterUserSpaces(null, null);
  };

  return (
    <Flexbox className={styles.filtersContainer}>
      <Flexbox className={styles.filtersWrap}>
        <TextField
          label="Поиск по названию"
          fullWidth
          type="search"
          size="small"
          value={searchText}
          onChange={onSearchTextChange}
          // onKeyDown={handleEnterPress}
          disabled={state.isLoading}
        />
        <Button
          sx={{ width: '120px' }}
          variant="contained"
          onClick={applySearchFilter}
          disabled={state.isLoading || !searchText}
        >
          Поиск
        </Button>
      </Flexbox>

      <Flexbox className={styles.filtersWrap}>
        <TextField
          label="Поиск по email админа"
          fullWidth
          type="search"
          size="small"
          value={searchEmail}
          onChange={onSearchEmailChange}
          // onKeyDown={handleEnterPress}
          disabled={state.isLoading}
        />
        <Button
          sx={{ width: '120px' }}
          variant="contained"
          onClick={applyEmailSearchFilter}
          disabled={state.isLoading || !searchEmail}
        >
          Поиск
        </Button>
      </Flexbox>
      <Flexbox className={styles.filtersWrap}>
        <FormControlLabel
          className={styles.filtersSearchCheck}
          label="Ожидают подтверждения"
          labelPlacement="end"
          control={(
            <Checkbox
              checked={pendingOnly}
              onChange={togglePendingOnly}
              disabled={state.isLoading}
            />
          )}
        />

        <Flexbox justifyContent="space-between" gap="20px">
          <Button
            variant="outlined"
            onClick={clearAllFilters}
            disabled={state.isLoading}
          >
            Очистить
          </Button>

          <Button
            variant="contained"
            onClick={applyCheckFilter}
            disabled={state.isLoading || !pendingOnly}
          >
            Применить
          </Button>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

export default SpaceFilters;
