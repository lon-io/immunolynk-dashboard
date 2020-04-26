import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { defaultTheme } from './styleguide/theme';
import LandingPage from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profiles from './pages/Profiles';
import './index.css';
import { PageRoutes } from './config/routes';

const history = createBrowserHistory();
//
const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router history={history}>
        <>
          <Switch>
            <Route exact path={PageRoutes.Home}>
              <Login />
            </Route>
            <Route exact path={PageRoutes.Login}>
              <Login />
            </Route>
            <Route path={PageRoutes.Dashboard}>
              <Dashboard />
            </Route>
            <Route path={PageRoutes.Profiles}>
              <Profiles />
            </Route>
          </Switch>
          {/* <LandingPage /> */}
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
