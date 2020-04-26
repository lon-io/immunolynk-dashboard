import React from 'react';
import NavBar from './NavBar';

export default {
  title: 'AppNavBar',
  component: NavBar,
};

const items = ['Dashboard', 'Profiles', 'Search', 'Settings'];

export const AppNavBar = () => <NavBar items={items} />;
