import React from 'react';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';

import TextInput from '../../Components/Fields/TextInput/TextInput';
import PasswordInput from '../../Components/Fields/PasswordInput/PasswordInput';
import ActionButton from '../../Components/Fields/ActionButton/ActionButton';

function Login() {
  const history = useHistory();
  const goToDashboard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push("/dashboard");
  }

  return (
    <div className="Login">
      <TextInput label="Username" />
      <br />
      <PasswordInput label="Password" />
      <br /><br />
      <ActionButton onClick={goToDashboard} />
    </div>
  );
}

export default Login;
