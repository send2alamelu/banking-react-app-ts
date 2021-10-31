import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export default function ActionButton(props: Props) {
  return (
    <Box px={2} py={2}>
      <Button fullWidth variant="contained" onClick={props?.onClick}>
        Login
      </Button>
    </Box>
  );
}
