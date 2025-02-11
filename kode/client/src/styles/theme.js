import { theme } from '@chakra-ui/core';


export default {
  ...theme,
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  }
};
