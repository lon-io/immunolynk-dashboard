import React from 'react';
// import StaticImage from './StaticImage';
import styled from 'styled-components';
import logoUrl from '../assets/images/logo.png';

// const StyledLogo = styled(StaticImage)`
//   width: 159px;
//   height: 116px;
// `;

const StyledLogo = styled.img`
  width: 184px;
  height: 116px;
`;

const Logo = () => <StyledLogo src={logoUrl} />;

export default Logo;
