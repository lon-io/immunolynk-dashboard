import React, { FC } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../config/routes';
import styled from 'styled-components';
import BurgerMenuIcon from './BurgerMenuIcon';
import Panel from './Panel';
import { respondTo } from '../styleguide/breakpoints';
import { FlexContainer } from '../styleguide/styleguide.stories';

export const DashboardPanelItems = {
  dashboard: {
    route: PageRoutes.Dashboard,
    label: 'Dashboard',
  },
  profiles: {
    route: PageRoutes.Profiles,
    label: 'Profiles',
  },
  search: {
    route: PageRoutes.Search,
    label: 'Search',
  },
  settings: {
    route: PageRoutes.Settings,
    label: 'Settings',
  },
};

const StyledBurgerMenuContainer = styled.div`
  ${respondTo.md`
    display: none;
  `}
`;

const StyledDashboard = styled(FlexContainer)``;

const StyledPanelWrapper = styled(FlexContainer)`
  flex-direction: column;
  position: fixed;
  left: 0;
  height: 100vh;
  right: 0;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 10;

  ${respondTo.sm`
    width: 20%;
    padding-top: 10px;
  `}
`;

const StyledPanelContainer = styled.div``;

const StyledDashboardContent = styled.div`
  position: relative;
  width: 80%;
  left: 20%;
`;

export interface DashboardContainerProps {
  activeItem?: keyof typeof DashboardPanelItems;
}

const DashboardContainer: FC<DashboardContainerProps> = ({ activeItem = 'dashboard', children }) => (
  <StyledDashboard>
    <StyledBurgerMenuContainer>
      <BurgerMenuIcon />
    </StyledBurgerMenuContainer>
    <StyledPanelWrapper>
      <Link to={PageRoutes.Home}>
        <Logo alternate />
      </Link>
      <StyledPanelContainer>
        <Panel items={Object.values(DashboardPanelItems)} />
      </StyledPanelContainer>
    </StyledPanelWrapper>
    <StyledDashboardContent>{children}</StyledDashboardContent>
  </StyledDashboard>
);

export default DashboardContainer;
