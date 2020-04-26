import React from 'react';
import DashboardContainer from '../components/DashboardContainer';
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  padding: 20px;
`;

const Settings = () => {
  return (
    <DashboardContainer activeItem="settings">
      <StyledContentWrapper>Settings goes here</StyledContentWrapper>
    </DashboardContainer>
  );
};

export default Settings;
