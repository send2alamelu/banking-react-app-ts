import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function Header() {
  const history = useHistory();
  const logout = (e: any) => {
    e.preventDefault();
    history.push("/");
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