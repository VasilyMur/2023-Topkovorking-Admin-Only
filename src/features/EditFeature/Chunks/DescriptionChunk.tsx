import { FC, ChangeEvent } from 'react';
import {
  TextareaAutosize,
  Typography,
  Button,
  FormControl,
  FormHelperText
} from '@mui/material';
import { useActions, useStateSelector } from '../../../hooks';
import TagsChunk from './TagsChunk';
import Flexbox from '../../../components/Flexbox';

const DescriptionChunk: FC = () => {
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const stateAuth = useStateSelector((s) => s.auth);
  const { user } = stateAuth;

  const { errors, space } = state;

  const onTextChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const slicedValue = value.slice(0, 620);

    actions.setInputChange(name, slicedValue);
  };

  return (
    <>
      <Flexbox flexDirection="column" gap="20px" minHeight="440px">
        <Typography variant="h3">Краткое описание</Typography>
        <FormControl error={!!errors?.description} fullWidth size="small">
          <TextareaAutosize
            aria-label="Описание"
            name="description"
            value={space.description ?? ''}
            onChange={onTextChange}
            disabled={state.isLoading}
            style={{ fontWeight: 300, minHeight: '200px' }}
          />
          <FormHelperText>{errors?.description}</FormHelperText>
        </FormControl>

        {user && user.role !== 'admin' ? null : <TagsChunk />}
      </Flexbox>

      <Flexbox flexDirection="column" gap="20px">
        <Flexbox justifyContent="space-between">
          <Button variant="contained" onClick={actions.setActionStepBack}>
            Назад
          </Button>

          <Button variant="contained" onClick={actions.confirmDescriptionInfo}>
            Вперед
          </Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default DescriptionChunk;
