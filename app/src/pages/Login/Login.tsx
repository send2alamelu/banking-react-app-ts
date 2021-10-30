import React from 'react';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const goToDashboard = (e: any) => {
    e.preventDefault();
    history.push("/dashboard");
  }
  return (
    <div className="Login">
      Login Form Goes here...
      <Link color="inherit" href="https://mui.com/" onClick={goToDashboard}>
        Go to dashboard
      </Link>
    </div>
  );
}

export default Login;
