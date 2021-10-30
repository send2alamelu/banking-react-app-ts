import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  label: string;
}

function PasswordInput(props: Props) {
  return (
    <>
      <TextField id="standard-password-input"
        label={props?.label}
        type="password"
        autoComplete="current-password"
        variant="standard" />
    </>
  );
}

export default PasswordInput;
