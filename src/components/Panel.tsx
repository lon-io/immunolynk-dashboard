import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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

const StyledPanelItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
  }

  p {
    color: white;
  }
`;

const StyledPanelItemsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Panel: FC<{ items: PanelItem[] }> = ({ items }) => (
  <StyledPanelContainer>
    <StyledPanelItemsList>
      {Object.entries(items).map(([itemKey, { route, label }]) => (
        <StyledPanelItem key={itemKey}>
          <Link to={route}>
            <Paragraph>{label}</Paragraph>
          </Link>
        </StyledPanelItem>
      ))}
    </StyledPanelItemsList>
  </StyledPanelContainer>
);

export default Panel;
