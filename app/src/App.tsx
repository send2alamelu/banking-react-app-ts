import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ROUTE_PATH } from './constants/RoutePath';

const LoginPage = lazy(() => import('./pages/Login/Login' /* webpackChunkName: "Login" */));
const DashboardPage = lazy(() => import('./pages/Dashboard/Dashboard' /* webpackChunkName: "Dashboard" */));
const TransactionPage = lazy(() => import('./pages/Transaction/Transaction' /* webpackChunkName: "Transaction" */));

const { LOGIN, DASHBOARD, TRANSACTION } = ROUTE_PATH;

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.BASE_PATH}>
        <Switch>
          <Suspense fallback={<CircularProgress />}>
            <Container>
              <Box className="content">
                <Route exact path={LOGIN} component={LoginPage} />
                <Route path={DASHBOARD} component={DashboardPage} />
                <Route path={TRANSACTION} component={TransactionPage} />
              </Box>
            </Container>
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
