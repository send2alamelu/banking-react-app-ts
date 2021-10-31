import React, { ChangeEventHandler } from 'react';
import TextField from '@mui/material/TextField';
import TextInputProps from './TextInput.props';

function TextInput(props: TextInputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <TextField id="standard-basic" label={props?.label} variant="standard" onChange={onChange} />
    </>
  );
}

export default TextInput;
