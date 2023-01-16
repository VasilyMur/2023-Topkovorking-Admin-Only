import React from 'react';
import { Box, BoxProps } from '@mui/material';

/**
 * Обёртка для Box с display="flex".
 */

// eslint-disable-next-line react/display-name
const Flexbox = React.forwardRef<unknown, BoxProps>((props, ref) => {
  const { children, ...other } = props;

  return (
    <Box ref={ref} display="flex" {...other}>
      {children}
    </Box>
  );
});

export default Flexbox;
