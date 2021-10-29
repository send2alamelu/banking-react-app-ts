import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <MemoryRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </MemoryRouter>
    </React.Fragment>
  );
}

export default App;
