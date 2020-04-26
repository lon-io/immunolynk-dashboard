// https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
import { css } from 'styled-components';

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const respondTo = Object.keys(breakpoints).reduce(
  // @ts-ignore
  (accumulator, label: keyof typeof breakpoints) => {
    accumulator[label] = (...args: any[]) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...(args as [{}]))};
      }
    `;
    return accumulator;
  },
  {} as {
    xs: typeof css;
    sm: typeof css;
    md: typeof css;
    lg: typeof css;
  }
);
