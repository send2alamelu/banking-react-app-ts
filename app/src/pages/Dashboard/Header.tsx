import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';

import { ROUTE_PATH } from '../../constants/RoutePath';
const { LOGIN } = ROUTE_PATH;

export default function Header() {
  const history = useHistory();
  const logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('jwtToken');
    history.push(LOGIN);
  }

  return (
    <Link
      component="button"
      variant="body2"
      onClick={logout}
    >
      Logout
    </Link>
  );
}