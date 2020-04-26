import React, { FC } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

export const DashboardPanelItems = {
  dashboard: {
    route: '/Dashboard',
    label: 'Dashboard',
  },
  profiles: {
    route: '/Profiles',
    label: 'Profiles',
  },
  search: {
    route: '/Search',
    label: 'Search',
  },
  settings: {
    route: '/Settings',
    label: 'Settings',
  },
};

export interface DashboardContainerProps {
  activeItem?: keyof typeof DashboardPanelItems;
}

const DashboardContainer = ({ activeItem = DashboardPanelItems.dashboard, children }) => (
  <div>
    <div>
      <Logo />
      <div>
        <ul>
          {Object.entries(DashboardPanelItems).map(([itemKey, { route, label }]) => (
            <li key={itemKey}>
              <Link to={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div>{children}</div>
  </div>
);

export default DashboardContainer;
