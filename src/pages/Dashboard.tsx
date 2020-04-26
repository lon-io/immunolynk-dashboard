import React from 'react';
import styled from 'styled-components';
import DashboardContainer from '../components/DashboardContainer';
import { Typography } from '../styleguide/Typography';
import { FlexContainer } from '../styleguide/styleguide.stories';
import { colors } from '../styleguide/colors';
import loadable from '@loadable/component';
const { H1 } = Typography;

// This dynamic import will not be processed server-side
const Chart = loadable(() => import('../components/Chart'), { ssr: false });

const StyledContentWrapper = styled.div`
  padding: 20px;
`;

const StyledHeading = styled(H1)`
  margin-top: 0;
`;

const StyledChartsContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
`;

const StyledChartColumn = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;

  > div {
    margin-bottom: 20px;
  }
`;

const StyledChartRow = styled(FlexContainer)`
  > div {
    width: calc(50% - 10px);

    &:first-child {
      margin-right: 20px;
    }
  }
`;

const StyledChart = styled(Chart)`
  margin-bottom: 20px;
`;

const sharedChartData = {
  height: 285,
  colors: [colors.primary, 'dfe9fc', 'fdfdff'],
};

const employeesTestedData = {
  ...sharedChartData,
  domId: 'employeesTested',
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      name: '',
      chartType: 'line',
      values: [100, 70, 90, 80, 90, 65, 70, 60, 90, 80, 110, 100],
    },
  ],
  title: 'Employees Tested',
  type: 'line',
};

const employeesImmuneData = {
  ...sharedChartData,
  domId: 'employeesImmune',
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
  datasets: [
    {
      name: '',
      chartType: 'line',
      values: [32, 55, 70, 86, 108, 139, 150, 164, 173, 202, 210, 230],
    },
  ],
  title: 'Employees Immune',
  type: 'line',
};

const percentageTestedData = {
  ...sharedChartData,
  domId: 'percentTested',
  labels: ['Tested', 'Not Tested'],
  datasets: [
    {
      name: '',
      chartType: 'pie',
      values: [75, 25],
    },
  ],
  title: 'Percentage Employees Tested',
  type: 'pie',
};

const percentageImmuneData = {
  ...sharedChartData,
  domId: 'percentImmune',
  labels: ['Immune', 'Not Immune'],
  datasets: [
    {
      name: '',
      chartType: 'pie',
      values: [65, 35],
    },
  ],
  title: 'Percentage Employees Immune',
  type: 'pie',
};

const Dashboard = () => {
  return (
    <DashboardContainer activeItem="dashboard">
      <StyledContentWrapper>
        <StyledHeading>Hi Jhon!</StyledHeading>
        <StyledChartsContainer>
          <StyledChartColumn>
            <StyledChart {...employeesTestedData}></StyledChart>
            <StyledChart {...employeesImmuneData}></StyledChart>
          </StyledChartColumn>
          <StyledChartRow>
            <StyledChart {...percentageTestedData}></StyledChart>
            <StyledChart {...percentageImmuneData}></StyledChart>
          </StyledChartRow>
        </StyledChartsContainer>
      </StyledContentWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
