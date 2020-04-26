import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { defaultTheme } from './styleguide/theme';
// import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import './index.css';

const history = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router history={history}>
        <>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          {/* <LandingPage /> */}
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
