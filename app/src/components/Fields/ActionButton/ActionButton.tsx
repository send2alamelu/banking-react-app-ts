import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import ActionButtonProps from './ActionButton.props';

export default function ActionButton(props: ActionButtonProps) {
  return (
    <Box px={2} py={2}>
      <Button fullWidth variant="contained" onClick={props?.onClick}>
        {props.label}
      </Button>
    </Box>
  );
}
