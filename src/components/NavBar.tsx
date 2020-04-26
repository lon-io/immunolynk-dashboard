import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '../styleguide/Typography';
const { LargeLead } = Typography;

interface NavItemProps {
  name: string;
}

interface NavBarProps {
  items: string[];
}

const NavBarWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
`;

const NavBarContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 40px;
`;

const NavItemContainer = styled.li`
  list-style: none;
  margin-left: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

const NavItem: FC<NavItemProps> = ({ name }) => (
  <NavItemContainer>
    <LargeLead>{name}</LargeLead>
  </NavItemContainer>
);

const NavBar: FC<NavBarProps> = ({ items }) => (
  <NavBarWrapper>
    <NavBarContainer>
      {items.map((itemName) => (
        <NavItem key={itemName} name={itemName} />
      ))}
    </NavBarContainer>
  </NavBarWrapper>
);

export default NavBar;
