import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Footer = () => <StyledFooter></StyledFooter>;
