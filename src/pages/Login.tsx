import React from 'react';
import { Container, FlexContainer } from '../styleguide/styleguide.stories';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import { Typography } from '../styleguide/Typography';
import BorderedButton, { FilledButton } from '../components/Button';
import styled from 'styled-components';
import manImageUrl from '../assets/images/man.png';
import logoYImageUrl from '../assets/images/logo-y.png';
import { respondTo } from '../styleguide/breakpoints';
const { H1 } = Typography;

const navItems = ['Dashboard', 'Profiles', 'Search', 'Settings'];

const StyledPageContainer = styled(Container)``;

const StyledContentContainer = styled(FlexContainer)`
  flex-direction: row;
  padding: 10px;

  ${respondTo.sm`
    padding: 40px;
    > div {
      width: 50%;
    }
  `}
`;

const StyledHeading = styled(H1)`
  padding: 10px;
`;

const StyledLeftContentContainer = styled(FlexContainer)`
  flex-direction: column;
`;

const StyledImageContentContainer = styled(FlexContainer)`
  display: none;

  ${respondTo.sm`
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    display: flex;
  `}
`;

const StyledButtonContainer = styled(FlexContainer)`
  flex-direction: column;
`;

const StyledLogo = styled(Logo)`
  top: 200;
  align-self: center;
  opacity: 0;

  ${respondTo.sm`
    align-self: flex-start;
  `}
`;

const StyledManImage = styled.img`
  position: absolute;
  left: 50px;
  top: 0;
  width: 60%;
  max-width: 500px;

  ${respondTo.md`
    width: 50%;
  `}
`;

const StyledYLogo = styled.img`
  display: none;
  opacity: 0.1;
  position: relative;
  top: 60px;
  right: 50px;

  ${respondTo.md`
    display: block;
    width: 50%;
  `}
`;

const LoginPage = () => (
  <StyledPageContainer>
    {/* <NavBar items={navItems}></NavBar> */}
    <StyledContentContainer>
      <StyledLeftContentContainer>
        <StyledLogo />
        <StyledHeading>Welcome to Immunolynk!</StyledHeading>
        <StyledButtonContainer>
          <BorderedButton>Sign Up</BorderedButton>
          <FilledButton>Log In</FilledButton>
        </StyledButtonContainer>
      </StyledLeftContentContainer>
      <StyledImageContentContainer>
        <StyledManImage src={manImageUrl} />
        <StyledYLogo src={logoYImageUrl} />
      </StyledImageContentContainer>
    </StyledContentContainer>
  </StyledPageContainer>
);

export default LoginPage;
