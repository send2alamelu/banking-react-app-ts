import React from 'react';
import TextField from '@mui/material/TextField';
import TextInputProps from './TextInput.props';
import { FormControl } from '@mui/material';
import { Box } from '@mui/system';

function TextInput(props: TextInputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <Box pb={2} px={2}>
      <FormControl fullWidth>
        <TextField
          id="standard-basic"
          label={props?.label}
          variant="standard"
          onChange={onChange}
        />
      </FormControl>
    </Box>
  );
}

export default TextInput;
