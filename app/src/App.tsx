import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

const LoginPage = React.lazy(() => import('./pages/Login/Login' /* webpackChunkName: "Login" */));
const DashboardPage = React.lazy(() => import('./pages/Dashboard/Dashboard' /* webpackChunkName: "Dashboard" */));
const TransactionPage = React.lazy(() => import('./pages/Transaction/Transaction' /* webpackChunkName: "Transaction" */));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<CircularProgress />}>
            <Container maxWidth="sm">
              <Box sx={{ my: 4 }}>
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/transaction" component={TransactionPage} />
              </Box>
            </Container>
          </Suspense>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
