import React from 'react';
import styled from 'styled-components';
import logoUrl from '../assets/images/logo.png';
import logoWhiteUrl from '../assets/images/logo-white.png';

const StyledLogo = styled.img`
  width: 184px;
  height: 116px;
`;

const Logo: React.FC<{
  alternate?: boolean;
}> = ({ alternate = false }) => <StyledLogo src={alternate ? logoWhiteUrl : logoUrl} />;

export default Logo;
