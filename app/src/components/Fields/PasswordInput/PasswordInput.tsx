import React from 'react';
import TextField from '@mui/material/TextField';
import PasswordInputProps from './PasswordInput.props';
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';

function PasswordInput(props: PasswordInputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props?.onChange(e.target.value);
  };

  return (
    <Box px={2}>
      <FormControl fullWidth>
        <TextField
          id="standard-password-input"
          label={props?.label}
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={onChange}
        />
      </FormControl>
    </Box>
  );
}

export default PasswordInput;
