import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { FormControl } from '@mui/material';

import DateInputProps from './DateInput.props';

export default function DateInput(props: DateInputProps) {
  const [value, setValue] = useState(null);

  return (
    <Box pb={2} px={2}>
      <FormControl fullWidth>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={props?.label}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              props.onChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
    </Box>
  );
}
