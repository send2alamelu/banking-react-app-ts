import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const onClick = (e: any) => {
    e.preventDefault();
    history.push("/dashboard");
  }
  return (
    <div className="Login">
      Login Form Goes here...
      <a href="#" onClick={onClick}>Go to dashboard</a>
    </div>
  );
}

export default Login;
