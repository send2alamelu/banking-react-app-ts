import { useHistory } from 'react-router-dom';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SendIcon from '@mui/icons-material/Send';

import BottomNav from '../../components/Common/BottomNav/BottomNav';

import { ROUTE_PATH } from '../../constants/RoutePath';
const { TRANSACTION } = ROUTE_PATH;

export default function Footer() {
  const history = useHistory();

  const goToTransferForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push(TRANSACTION);
  }

  return (
    <BottomNav>
      <BottomNavigationAction label="Make a transfer" onClick={goToTransferForm} icon={<SendIcon />} />
    </BottomNav>
  );
}
