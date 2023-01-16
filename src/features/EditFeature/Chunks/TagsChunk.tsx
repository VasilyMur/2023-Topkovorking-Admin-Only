import React, { FC, useState, ChangeEvent } from 'react';
import {
  Button,
  FormControl,
  SelectChangeEvent,
  Chip,
  Stack,
  InputLabel,
  Select,
  TextField,
  MenuItem
} from '@mui/material';
import { TAG_TITLES_ALL } from '../../../constants';
import { useActions, useStateSelector } from '../../../hooks';
import Flexbox from '../../../components/Flexbox';

const TagsChunk: FC = () => {
  const [tagSelected, setTagSelected] = useState('');
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const { space } = state;

  const onSelectTagChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setTagSelected(value);
  };

  const handleDelete = (tag: string) => {
    if (tag) {
      actions.removeTag(tag);
    }
  };

  const handleAddTag = () => {
    if (tagSelected) {
      actions.addTag(tagSelected);
    }
  };

  const onTextChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let valueCheck = event.target.value;
    if (event.target.name === 'name') {
      valueCheck = event.target.value.slice(0, 39);
    }

    actions.setInputChange(event.target.name, valueCheck);
  };

  return (
    <Flexbox
      flexDirection="column"
      gap="20px"
      paddingTop="15px"
      marginBottom="22px"
    >
      <Stack direction="row" spacing={1}>
        {state.space.tags?.map((t) => (
          <Chip
            key={t}
            color="secondary"
            label={TAG_TITLES_ALL[t as keyof typeof TAG_TITLES_ALL]}
            onDelete={() => handleDelete(t)}
          />
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        <FormControl fullWidth size="small">
          <InputLabel>Tag</InputLabel>
          <Select
            value={tagSelected ?? ''}
            label="Tag"
            name="tag"
            onChange={onSelectTagChange}
            disabled={state.isLoading}
          >
            {Object.keys(TAG_TITLES_ALL).map((res) => (
              <MenuItem key={res} value={res}>
                {TAG_TITLES_ALL[res as keyof typeof TAG_TITLES_ALL]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button onClick={handleAddTag} variant="contained">
          Добавить
        </Button>
      </Stack>

      <TextField
        label="Slug"
        name="slug"
        fullWidth
        size="medium"
        value={space.slug ?? ''}
        onChange={onTextChange}
        disabled={state.isLoading}
      />
    </Flexbox>
  );
};

export default TagsChunk;
