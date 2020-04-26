import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageRoutes } from '../config/routes';
import styled from 'styled-components';
import { respondTo } from '../styleguide/breakpoints';
import { FlexContainer } from '../styleguide/styleguide.stories';
import { Typography } from '../styleguide/Typography';
const { Paragraph } = Typography;

export interface PanelItem {
  route: PageRoutes;
  label: string;
}

const StyledPanelContainer = styled.div``;

const StyledPanelItem = styled.li<{ isActive: boolean }>`
  list-style: none;

  a {
    text-decoration: none;
  }

  p {
    color: white;
    ${({ isActive }) => (isActive ? `font-weight: 800;` : '')}
  }
`;

const StyledPanelItemsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export interface PanelProps {
  items: PanelItem[];
}

const Panel: FC<PanelProps> = ({ items }) => {
  const history = useHistory();
  const currentUrl = history.location.pathname;

  return (
    <StyledPanelContainer>
      <StyledPanelItemsList>
        {Object.entries(items).map(([itemKey, { route, label }]) => (
          <StyledPanelItem key={itemKey} isActive={currentUrl === route}>
            <Link to={route}>
              <Paragraph>{label}</Paragraph>
            </Link>
          </StyledPanelItem>
        ))}
      </StyledPanelItemsList>
    </StyledPanelContainer>
  );
};

export default Panel;
