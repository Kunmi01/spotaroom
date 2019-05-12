/**
 * Responsive
 * ----------
 * responsive css breakpoints can be found here
 */

export const minWidths = {
  mini: 495,
  medium: 810,
  large: 1200,
};

export const mini = (content) => `
  @media screen and (min-width: ${minWidths.mini}px) {
    ${content}
  }
`;

export const medium = (content) => `
  @media screen and (min-width: ${minWidths.medium}px) {
    ${content}
  }
`;

export const large = (content) => `
  @media screen and (min-width: ${minWidths.large}px) {
    ${content}
  }
`;
