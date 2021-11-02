import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';

// Components.
import TextInput from '../../components/Fields/TextInput/TextInput';
import PasswordInput from '../../components/Fields/PasswordInput/PasswordInput';
import ActionButton from '../../components/Fields/ActionButton/ActionButton';

// Hooks.
import usePost from '../../hooks/usePost';

import { ROUTE_PATH } from '../../constants/RoutePath';
import { getLoginApiPath } from '../../utils/Api';
const { DASHBOARD } = ROUTE_PATH;

function Login() {
  const history = useHistory();
  const { postApi, response, error } = usePost(getLoginApiPath());
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  useEffect(() => {
    const loginResponse: any = response;
    if (loginResponse?.token) {
      localStorage.setItem('jwtToken', loginResponse?.token)
      history.push(DASHBOARD);
    }
  }, [response, error, history]);

  const loginAndgoToDashboard = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!userName || !passWord) {
      return
    }

    postApi({
      username: userName,
      password: passWord
    });
  }, [userName, passWord, postApi]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <TextInput id="username" label="Username" onChange={setUserName} />
        <br />
        <PasswordInput id="password" label="Password" onChange={setPassWord} />
        <br /><br />
        <ActionButton label="Login" onClick={loginAndgoToDashboard} />
      </Grid>
    </Grid>
  );
}

export default Login;
