import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  label: string;
}

function TextInput(props: Props) {
  return (
    <>
      <TextField id="standard-basic" label={props?.label} variant="standard" />
    </>
  );
}

export default TextInput;
