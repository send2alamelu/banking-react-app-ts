import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavProps from './BottomNav.props';

export default function BottomNav(props: BottomNavProps) {
  return (
    <Box pt={4}>
      <BottomNavigation showLabels>
        {props?.children}
      </BottomNavigation>
    </Box>
  );
}
