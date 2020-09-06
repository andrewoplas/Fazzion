import { createTheme, BaseTheme } from '@shopify/restyle';
import { fontFamily } from './styles';

export const palette = {
  mintTulip: '#BFEAF5',
  padua: '#BEECC4',
  peach: '#FFE4D9',
  pippin: '#FFDDDD',
  shamrock: '#2CB9B0',
  gray: '#F4F0EF',

  primary: '#2CB9B0',
  primary07: 'rgba(12, 13, 52, 0.7)',
  secondary: '#0C0D34',
  white: '#fff',
};

const theme: BaseTheme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: fontFamily.bold,
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontFamily: fontFamily.semibold,
      fontSize: 28,
      lineHeight: 30,
      color: 'primary',
    },
    title2: {
      fontFamily: fontFamily.semibold,
      fontSize: 24,
      lineHeight: 30,
      color: 'primary',
    },
    body: {
      fontFamily: fontFamily.regular,
      fontSize: 16,
      lineHeight: 24,
      color: 'secondary',
    },
    buttonLabel: {
      fontSize: 15,
      fontFamily: fontFamily.semibold,
      textAlign: 'center',
    },
  },
});

export type Theme = typeof theme;
export default theme;
