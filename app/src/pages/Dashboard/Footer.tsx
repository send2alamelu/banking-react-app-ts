import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SendIcon from '@mui/icons-material/Send';

import BottomNav from '../../Components/Common/BottomNav/BottomNav';

export default function Footer() {
  const history = useHistory();

  const goToTransferForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push("/transaction");
  }

  return (
    <BottomNav>
      <BottomNavigationAction label="Make a transfer" onClick={goToTransferForm} icon={<SendIcon />} />
    </BottomNav>
  );
}
