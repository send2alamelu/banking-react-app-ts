import * as React from 'react';
import Button from '@mui/material/Button';

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export default function ActionButton(props: Props) {
  return (
    <Button variant="contained" onClick={props?.onClick}>
      Login
    </Button>
  );
}
