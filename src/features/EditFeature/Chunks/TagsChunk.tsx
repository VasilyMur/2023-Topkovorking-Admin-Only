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
  MenuItem,
  Divider
} from '@mui/material';
import { TAG_TITLES_ALL, BEAUTY_TYPES, TAG_BEAUTY } from '../../../constants';
import { useActions, useStateSelector } from '../../../hooks';
import Flexbox from '../../../components/Flexbox';

const TagsChunk: FC = () => {
  const [typeSelected, setTypeSelected] = useState('');
  const [tagSelected, setTagSelected] = useState('');
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const { space } = state;

  const isBeauty = space.tags.some((t) => t === TAG_BEAUTY);

  const onSelectTagChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setTagSelected(value);
  };

  const onSelectBeautyTypeChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setTypeSelected(value);
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

  const handleAddBeautyType = () => {
    if (typeSelected) {
      actions.addBeautyType(typeSelected);
    }
  };

  const handleDeleteBeautyType = (beautyType: string) => {
    if (beautyType) {
      actions.removeBeautyType(beautyType);
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

      <Divider />

      {isBeauty ? (
        <>
          <Stack direction="row" spacing={1}>
            {state.space.beautyTypes?.map((t) => (
              <Chip
                key={t}
                color="secondary"
                label={BEAUTY_TYPES[t as keyof typeof BEAUTY_TYPES]}
                onDelete={() => handleDeleteBeautyType(t)}
              />
            ))}
          </Stack>
          <Stack direction="row" spacing={1}>
            <FormControl fullWidth size="small">
              <InputLabel>Название мастера</InputLabel>
              <Select
                value={typeSelected ?? ''}
                label="Beauty type"
                name="beautyType"
                onChange={onSelectBeautyTypeChange}
                disabled={state.isLoading}
              >
                {Object.keys(BEAUTY_TYPES).map((res) => (
                  <MenuItem key={res} value={res}>
                    {BEAUTY_TYPES[res as keyof typeof BEAUTY_TYPES]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button onClick={handleAddBeautyType} variant="contained">
              Добавить
            </Button>
          </Stack>

          <Divider />
        </>
      ) : null}

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
