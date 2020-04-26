import React, { useEffect } from 'react';
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm';
import styled from 'styled-components';

export interface Dataset {
  name: string;
  chartType: string;
  values: number[];
}

export interface ChartProps {
  domId: string;
  labels: string[];
  datasets: Dataset[];
  title: string;
  height: number;
  colors: string[];
  type: string;
}

const StyledChartWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

const AppChart: React.FC<ChartProps> = ({ domId, labels, datasets, title, height, colors, type }) => {
  const data = {
    labels,
    datasets,
  };

  const initializeChart = React.useCallback(() => {
    return new Chart(`#${domId}`, {
      // or a DOM element,
      // new Chart() in case of ES6 module with above usage
      title,
      data,
      type, // or 'bar', 'line', 'scatter', 'pie', 'percentage'
      height,
      colors,
      ...(type === 'line'
        ? {
            lineOptions: {
              regionFill: 1,
              hideDots: 1,
              heatline: 1,
              xIsSeries: true,
            },
          }
        : {}),
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      initializeChart();
    }, 1000);
  }, [title]);

  return <StyledChartWrapper id={domId} />;
};

export default AppChart;
