import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';

interface Props {
  label: string;
  items: {
    value: string;
    label: string;
  }[]
}

export default function Dropdown(props: Props) {
  const [dropDownValue, setDropdownValue] = React.useState('');

  /**
   * Event typing has issue in MUI Select.
   * FIXME: fix `React.ChangeEvent<{ value: string }>` mui select issue.
   * 
   * Refer for Issues:
   * https://stackoverflow.com/questions/58675993/typescript-react-select-onchange-handler-type-error
   * https://github.com/mui-org/material-ui/issues/16065
   */
  const handleChange = (event: any) => {
    setDropdownValue(event.currentTarget.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
        <MuiSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropDownValue}
          label={props?.label}
          onChange={handleChange}
        >
          {props.items.map((item) => {
            return (
              <MenuItem value={item?.value}>{item.label}</MenuItem>
            )
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
}
