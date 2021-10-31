import React from 'react';
import TextField from '@mui/material/TextField';
import PasswordInputProps from './PasswordInput.props';

function PasswordInput(props: PasswordInputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props?.onChange(e.target.value);
  };

  return (
    <>
      <TextField
        id="standard-password-input"
        label={props?.label}
        type="password"
        autoComplete="current-password"
        variant="standard"
        onChange={onChange}
      />
    </>
  );
}

export default PasswordInput;
