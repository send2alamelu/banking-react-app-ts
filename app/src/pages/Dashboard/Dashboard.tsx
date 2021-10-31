import { Grid } from '@mui/material';
import styled from 'styled-components';

// Components.
import YourActivity from './YourActivity'
import Header from './Header'
import Footer from './Footer'
import AccountBalance from './AccountBalance';

const MuiGrid = styled(Grid)`
  width: 100%;
`;

function Dashboard() {
  return (
    <MuiGrid container>
      <MuiGrid item xs={12} sm={12}>
        <Header />
      </MuiGrid>
      <MuiGrid item sm={12}>
        <AccountBalance />
      </MuiGrid>
      <MuiGrid item sm={12}>
        <YourActivity />
      </MuiGrid>
      <MuiGrid item sm={12}>
        <Footer />
      </MuiGrid>
    </MuiGrid>
  );
}

export default Dashboard;
