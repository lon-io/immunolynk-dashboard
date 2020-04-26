import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styleguide/theme';
import './index.css';
import { PageRoutes } from './config/routes';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profiles from './pages/Profiles';
import Search from './pages/Search';
import Settings from './pages/Settings';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Route path={PageRoutes.Search}>
            <Search />
          </Route>
          <Route path={PageRoutes.Settings}>
            <Settings />
          </Route>
        </Switch>
        {/* <LandingPage /> */}
      </>
    </ThemeProvider>
  );
};

export default App;
