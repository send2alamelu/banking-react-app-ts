import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import DashboardPage from './pages/Dashboard/Dashboard';
import TransactionPage from './pages/Transaction/Transaction';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/transaction" component={TransactionPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
