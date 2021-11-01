import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavProps from './BottomNav.props';

export default function BottomNav(props: BottomNavProps) {
  const [value, setValue] = useState(0);

  return (
    <Box pt={4}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {props?.children}
      </BottomNavigation>
    </Box>
  );
}
