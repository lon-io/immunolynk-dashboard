import React from 'react';
import DashboardContainer from '../components/DashboardContainer';
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  padding: 20px;
`;

const Search = () => {
  return (
    <DashboardContainer activeItem="search">
      <StyledContentWrapper>Search goes here</StyledContentWrapper>
    </DashboardContainer>
  );
};

export default Search;
