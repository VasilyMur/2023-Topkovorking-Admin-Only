import React, { FC } from 'react';
import axios from 'axios';
import { useActions, useStateSelector } from '../../../../hooks';
import { PATH_TO_IMAGE_URL } from '../../../../constants';

interface UploadImageProps {
  maxHeight: number;
  maxWidth: number;
  setError: Function;
  setDisplayLoader: Function;
  loader: boolean;
  loaderCheck: boolean;
}

const UploadImage: FC<UploadImageProps> = ({
  maxHeight,
  maxWidth,
  setError,
  setDisplayLoader,
  loader,
  loaderCheck
}) => {
  const state = useStateSelector((s) => s.edit);
  const actions = useActions((a) => a.edit);

  const handleImageUpload = (e: { target: { files: any } }) => {
    const { files } = e.target;

    if (files) {
      setError('');

      const { size } = files[0];
      const file = files[files.length - 1];

      if (size < 100000 && state.token) {
        const image = new Image();
        const objectURL = URL.createObjectURL(files[0]);
        image.src = objectURL;

        image.onload = async () => {
          const { naturalHeight, naturalWidth } = image;

          if (naturalHeight !== maxHeight || naturalWidth !== maxWidth) {
            setError(
              `Размер данного фото должен быть - ${maxWidth} X ${maxHeight}`
            );
          } else {
            setDisplayLoader(true);

            const fileExt = file.name.substring(file.name.lastIndexOf('.') + 1);
            const fileName = `${Date.now()}.${fileExt}`;

            if (state.uploadUrl) {
              const response: { data: { fileName: string; fileId: string } } =
                await axios.post(state.uploadUrl, file, {
                  headers: {
                    Authorization: state.token ?? '',
                    'content-type': file.type,
                    'X-Bz-File-Name': fileName,
                    'X-Bz-Content-Sha1': 'do_not_verify'
                  }
                });

              // Upload result
              const { data } = response;
              const imagePath = `${PATH_TO_IMAGE_URL}/${data.fileName}`;

              if (maxHeight === 160) {
                actions.updateSpaceTitleImage(
                  imagePath,
                  data.fileName,
                  data.fileId
                );
                setDisplayLoader(false);
              } else {
                actions.updateSpaceMainImage(
                  imagePath,
                  data.fileName,
                  data.fileId
                );
                setDisplayLoader(false);
              }
            }
          }
        };
      }
    }
  };

  return (
    <input
      type="file"
      name="file"
      accept="image/jpg, image/jpeg, image/png"
      onChange={handleImageUpload}
      disabled={loader || loaderCheck}
    />
  );
};

export default UploadImage;
