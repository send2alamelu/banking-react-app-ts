import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

import BottomNav from '../../Components/Common/BottomNav/BottomNav';

export default function Footer() {
  const history = useHistory();

  const cancelTransaction = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // TODO: Call API
    history.push("/dashboard");
  }

  const sendTransaction = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // TODO: Call API
    history.push("/dashboard");
  }

  return (
    <BottomNav>
      <BottomNavigationAction label="Cancel" onClick={cancelTransaction} icon={<CancelIcon />} />
      <BottomNavigationAction label="Submit" onClick={sendTransaction} icon={<SendIcon />} />
    </BottomNav>
  );
}
