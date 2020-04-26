import React from 'react';
import styled from 'styled-components';

const StyledBurgerMeny = styled.svg`
  fill: white;
`;

const BurgerMenuIcon = () => (
  <StyledBurgerMeny viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </StyledBurgerMeny>
);

export default BurgerMenuIcon;
