import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

import BottomNav from '../../../components/Common/BottomNav/BottomNav';
import { ROUTE_PATH } from '../../../constants/RoutePath';
import FooterProps from './Footer.props';

const { DASHBOARD } = ROUTE_PATH;

export default function Footer(props: FooterProps) {
  const history = useHistory();

  const cancelTransaction = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // TODO: Call API
    history.push(DASHBOARD);
  }

  const sendTransaction = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // TODO: Call API
    // history.push(DASHBOARD);
    props.onSubmit();
  }

  return (
    <BottomNav>
      <BottomNavigationAction label="Cancel" onClick={cancelTransaction} icon={<CancelIcon />} />
      <BottomNavigationAction label="Submit" onClick={sendTransaction} icon={<SendIcon />} />
    </BottomNav>
  );
}
