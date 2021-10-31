import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import styled from 'styled-components';

import { ROUTE_PATH } from '../../constants/RoutePath';
import { Box } from '@mui/system';
const { LOGIN } = ROUTE_PATH;

const HeaderWrapper = styled(Box)`
  padding: 16px 0;
  text-align: right;
`;

export default function Header() {
  const history = useHistory();
  const logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('jwtToken');
    history.push(LOGIN);
  }

  return (
    <HeaderWrapper>
      <Link
        component="button"
        variant="body2"
        onClick={logout}
      >
        Logout
      </Link>
    </HeaderWrapper>
  );
}